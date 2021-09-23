import { cx } from '@emotion/css';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { MergeElementPropsWithoutRef, ThemeProps } from '../../types';
import { useThemeId } from '../../context/Theme';
import { useSafeTimeout } from '../../hooks/useSafeTimeout';
import { useTranslations } from '../../hooks/useTranslations';
import { ucfirst } from '../../utils/case';
import { PinIcon } from '../../icons/PinIcon';
import { TimesIcon } from '../../icons/TimesIcon';
import { ButtonColor } from '../../components/Button';
import { IconButton } from '../../components/Button/IconButton';
import styles from './styles/Toast.module.css';
import { ToastCountdownBar } from './ToastCountdownBar';
import { ToastNotificationLevel } from './types';
import { useToastComponentIds } from './useToastComponentIds';

export type ToastTranslations = {
  closeNotificationLabel: string;
  pinNotificationLabel: string;
};

export const toastTranslations: ToastTranslations = {
  closeNotificationLabel: 'Close notification',
  pinNotificationLabel: 'Pin notification',
};

export interface LocalToastProps extends ThemeProps {
  children: React.ReactNode;
  className?: string;
  /** The context ID is used by both the modal system and the aria-label system */
  contextId?: string;
  /** The created time is used with the duration to render the countdown bar */
  created?: number;
  duration?: number;
  /** The immediate flag remove the entry animation */
  immediate?: boolean;
  level?: ToastNotificationLevel;
  onClose?: (event: React.MouseEvent | React.KeyboardEvent, id?: string) => void;
  onPin?: (event: React.MouseEvent | React.KeyboardEvent, id?: string) => void;
  translations?: ToastTranslations;
  variant?: 'colored';
}

export type ToastProps = MergeElementPropsWithoutRef<'div', LocalToastProps>;

export function Toast({
  children,
  className,
  created,
  duration = 0,
  contextId,
  immediate = false,
  level = 'info',
  onClose,
  onPin,
  themeId: initThemeId,
  translations: customTranslations,
  variant,
  ...props
}: ToastProps): React.ReactElement<ToastProps> {
  const themeId = useThemeId(initThemeId);
  const { setSafeTimeout } = useSafeTimeout();
  const [hasTransitioned, setHasTransitioned] = useState(immediate);
  const { generateTitleId } = useToastComponentIds(contextId);
  const translations = useTranslations<ToastTranslations>({
    customTranslations,
    fallbackTranslations: toastTranslations,
  });
  const { closeNotificationLabel, pinNotificationLabel } = translations;

  let buttonColor: ButtonColor = 'neutral';
  if (variant === 'colored') {
    buttonColor = themeId === 'dark' ? 'black' : 'white';
  }

  const handleClose = useCallback(
    event => {
      onClose && onClose(event, contextId);
    },
    [contextId, onClose],
  );

  const handlePin = useCallback(
    event => {
      onPin && onPin(event, contextId);
    },
    [contextId, onPin],
  );

  useLayoutEffect(() => {
    !hasTransitioned && setSafeTimeout(() => setHasTransitioned(true), 100);
  }, [hasTransitioned, setSafeTimeout]);

  return (
    <div
      aria-describedby={generateTitleId()}
      aria-label={`${ucfirst(level)} notification`}
      className={cx(
        styles.toast,
        level && level !== 'custom' && styles[`toast--${level}`],
        themeId && styles[`toast--${themeId}`],
        variant && styles[`toast--${variant}`],
        !immediate && styles['toast--transitional'],
        hasTransitioned && styles['has-transitioned'],
        className,
      )}
      role="alertdialog"
      {...props}
    >
      <div className={styles.toastActions}>
        {onPin && duration > 0 && (
          <IconButton<'button'>
            aria-label={pinNotificationLabel}
            as="button"
            color={buttonColor}
            onClick={handlePin}
            themeId={themeId}
          >
            <PinIcon scale="xsmall" title={pinNotificationLabel} />
          </IconButton>
        )}
        {onClose && (
          <IconButton<'button'>
            aria-label={closeNotificationLabel}
            as="button"
            color={buttonColor}
            onClick={handleClose}
            themeId={themeId}
          >
            <TimesIcon scale="xsmall" title={closeNotificationLabel} />
          </IconButton>
        )}
      </div>

      {children}
      {duration > 0 && created && (
        <ToastCountdownBar created={created} duration={duration} level={level} themeId={themeId} variant={variant} />
      )}
    </div>
  );
}

Toast.displayName = 'Toast';
