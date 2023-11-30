import  "./style.css"

const Pagination = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
      
      }}
    >
      {children}
    </div>
  )
}

const Left = ({ handleClick, disabled }) => (
  <button disabled={disabled} onClick={handleClick}>
    {"<"}
  </button>
)
 const Right = ({ handleClick, disabled }) => (
  <button disabled={disabled} onClick={handleClick}>
    {">"}
  </button>
)
 const Pages = ({ currentPage, setPage, totalPages }) => {
  const handlePageClick = (pageNumber) => {
    setPage(pageNumber)
  }

  const renderedPages = Array.from({ length: totalPages }, (_, index) => (
    <span
      className={index + 1 === currentPage ? "current" : "noCurrent"}
      onClick={() => handlePageClick(index + 1)}
      key={index}
    >
      {index + 1}
    </span>
  ))
  return (
    <div className={'pagination'}>
      <div className={'pageNumbers'}>{renderedPages}</div>
    </div>
  )
}

Pagination.Left = Left
Pagination.Right = Right
Pagination.Pages = Pages


export default Pagination
