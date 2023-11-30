import { useState } from "react"

const useTable = (data, rowsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(data.length / rowsPerPage)
  const indexOfLastRow = currentPage * rowsPerPage
  const indexOfFirstRow = indexOfLastRow - rowsPerPage
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow)

  const nextPage = () => {
    const totalPages = Math.ceil(data.length / rowsPerPage)
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages))
  }

  const previousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
  }

  const setPage = (pageNumber) => {
    setCurrentPage(Math.min(Math.max(pageNumber, 1), totalPages))
  }

  return {
    currentRows,
    currentPage,
    nextPage,
    previousPage,
    totalPages,
    setPage,
  }
}

export default useTable
