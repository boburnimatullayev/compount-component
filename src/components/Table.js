const Table = ({ children }) => {
  return <table>{children}</table>;
};

const Thead = ({ children }) => {
  return <thead>{children}</thead>;
};

const TBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const Tr = ({ children }) => {
  return <tr>{children}</tr>;
};

const Th = ({ children }) => {
  return <th>{children}</th>;
};

const Td = ({ children }) => {
  return <td>{children}</td>;
};

Table.Thead = Thead;
Table.TBody = TBody;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table;
