export const menu = [
  {
    name: 'File',
    attribute: 'not-selected',
    subMenus: [
      {
        name: 'New',
      },
      {
        name: 'Open',
        action: 'open_file',
      },
      {
        name: 'Save',
      },
      {
        name: 'Save as',
      },
    ],
  },
  {
    name: 'Edit',
    subMenus: [
      {
        name: 'Undo',
      },
      {
        name: 'Redo',
      },
      {
        name: 'Copy',
      },
      {
        name: 'Paste',
      },
    ],
  },
];
