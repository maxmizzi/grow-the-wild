import { ReactNode } from "react";

interface RegisterInterestDialogProps {
  children: ReactNode;
}

// Declare Tally on window object for TypeScript
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: {
        layout?: 'modal' | 'default';
        width?: number;
        autoClose?: number;
        hideTitle?: boolean;
        overlay?: boolean;
      }) => void;
    };
  }
}

export const RegisterInterestDialog = ({ children }: RegisterInterestDialogProps) => {
  const openTallyForm = () => {
    const TALLY_FORM_ID = "n9zz2V";
    
    // Wait a bit for Tally to load if needed
    const tryOpenPopup = () => {
      if (window.Tally && typeof window.Tally.openPopup === 'function') {
        try {
          window.Tally.openPopup(TALLY_FORM_ID, {
            layout: 'modal',
            width: 500,
            autoClose: 2000,
          });
        } catch (error) {
          console.error('Error opening Tally popup:', error);
          // Fallback: open in new tab
          window.open(`https://tally.so/r/${TALLY_FORM_ID}`, '_blank');
        }
      } else {
        console.warn('Tally not ready, opening in new tab');
        // Fallback: open in new tab
        window.open(`https://tally.so/r/${TALLY_FORM_ID}`, '_blank');
      }
    };

    // Try immediately, or wait a bit if script is still loading
    if (window.Tally) {
      tryOpenPopup();
    } else {
      setTimeout(tryOpenPopup, 100);
    }
  };

  return (
    <div onClick={openTallyForm} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
};
