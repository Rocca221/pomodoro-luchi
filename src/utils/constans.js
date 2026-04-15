// src/components/utils/constants.js
export const MODES = {
  PM: { id: 'PM', time: 25 * 60, label: 'PM' },
  SHORT: { id: 'SHORT', time: 5 * 60, label: 'Corto' },
  LONG: { id: 'LONG', time: 15 * 60, label: 'Largo' },
};

export const COLORS = {
  primary: '#1E88E5',    // azul celeste — botón PARAR
  success: '#29B6F6',    // celeste claro — botón INICIAR
  text: '#0D47A1',       // azul oscuro — títulos y texto principal
  bg: '#EAF4FB',         // fondo azul muy claro, casi blanco
  tabBg: '#FFFFFF',      // fondo blanco para las tabs
  tabActive: '#1E88E5',  // tab seleccionada azul
  tabInactive: '#90CAF9',// tab no seleccionada celeste suave
};