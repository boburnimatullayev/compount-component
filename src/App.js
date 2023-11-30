import Table from "./components/Table";
import { row, column } from "./components/data";
import useTable from "./components/usetTable";
import Pagination from "./components/Pagination";

function App() {
  const {
    currentRows,
    currentPage,
    totalPages,
    nextPage,
    previousPage,
    setPage,
  } = useTable(row, 5);
  return (
    <div className="App">
      <Table>
        <Table.Thead>
          <Table.Tr>
            {column.map((item) => (
              <Table.Th>{item.name}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.TBody>
          {currentRows.map((item) => (
            <Table.Tr>
              <Table.Td>{item.id}</Table.Td>
              <Table.Td>{item.name}</Table.Td>
              <Table.Td>{item.email}</Table.Td>
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table>

      <Pagination>
        <Pagination.Left
          disabled={currentPage === 1}
          handleClick={previousPage}
        />
        <Pagination.Pages
          currentPage={currentPage}
          setPage={setPage}
          totalPages={totalPages}
          count={Math.ceil(row.length / 10)}
          current={currentPage}
        />
        <Pagination.Right
          disabled={currentPage === Math.ceil(row.length / 10)}
          handleClick={nextPage}
        />
      </Pagination>
    </div>
  );
}

export default App;
