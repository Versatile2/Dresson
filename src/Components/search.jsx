import React, { Component } from "react";
import style from "../assets/style/main.module.scss";
//props: label:string, forLabel:string, id:string, name:string, placeholder:string, img:string, alt:string,
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { label, forLabel, id, name, placeholder, icon, alt } = this.props;
    return (
      <div>
        <form action="" className={style.search}>
          <label for={forLabel} className={style.searchLabel}>
            {label}
          </label>
          <label className={style.contentSearch}>
            <input
              type="search"
              id={id}
              name={name}
              placeholder={placeholder}
              className={style.searchInput}
            />
            <img
              src={require(`../assets/icones/${icon}`)}
              alt={alt}
              className={style.searchMagnifyingicon}
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
