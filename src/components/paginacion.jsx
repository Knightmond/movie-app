export default function Paginacion(props) {
  
  const getPages = function(){
    const pages = [];
    for (let i=0;i<props.total;i++){
      let page = i+1;
      pages.push(
      <a onClick={() => props.onChange(page)} className={props.pagina === page ? "active" : ""}>
        {page}
      </a>
      )
    }
    return pages
  }

  return (
    <div className="topbar-filter">
      <label>Movies per page:</label>
      <select>
        <option value="range">5 movies</option>
        <option value="saab">10 movies</option>
      </select>
      <div className="pagination2">
        <span>Page {props.pagina} of {props.total}</span>
        {getPages()}
      </div>
    </div>
  )
}