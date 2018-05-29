import * as React from 'react';

import { Mode } from '..';

import './VerifyEmailOverlay.scss';

interface IVerifyEmailOverlay {
  onModeChange: (mode: Mode) => void;
}

export const VerifyEmailOverlay = ({ onModeChange }: IVerifyEmailOverlay) => (
  <div className="VerifyEmailOverlay">
    <p>We've sent you an email with a link to verify your email address.</p>
  </div>
);