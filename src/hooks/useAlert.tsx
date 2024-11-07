'use client'
import { useState } from "react";
type AlertData = {
  show: boolean;
  text: string;
  type: 'success' | 'danger';
};

export function useAlert() {
  const [alert, setAlert] = useState<AlertData>({ show: false, text: '', type: 'danger' });

  const showAlert = (data: Omit<AlertData, 'show'>) => setAlert({ ...data, show: true });
  const hideAlert = () => setAlert({ show: false, text: '', type: 'danger' });

  return { alert, showAlert, hideAlert };
}
