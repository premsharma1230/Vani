import * as React from "react";
import Checkbox from "@mui/material/Checkbox";
import Pagination from "@mui/material/Pagination";
import { Link, useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import book1 from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { PriceSlider } from "../BookListing/PriceSlider";
import { createAndRemoveWishList, GetBookListWithFilters, GetGenrelist, getWishList } from '../../api/api';

export const Booklist = () => {
  let navigate = useNavigate();
  const [selectedGenre, setSelectedGenre] = React.useState([]);
  const [selectedCategories, setSelectedCategories] = React.useState([]);
  const [genreItems, setGenreItems] = React.useState([]);
  const [categoriesItems, setCategoriesItems] = React.useState([]);
  const [selectedMinPrice, setSelectedMinPrice] = React.useState(1);
  const [selectedMaxPrice, setSelectedMaxPrice] = React.useState(2000);
  const [bookListFilterData, setBookListFilterData] = React.useState([])
  const [getWishListData, setGetWishListData] = React.useState([])
  const [genreList, setGenreList] = React.useState([])
  const categories = [
    { name: "print", value: "printed_book", id: 1 },
    { name: "E book", id: 2, value: "e_book" },
    { name: "Audio book", id: 3, value: "audio_book" },
  ];
  React.useEffect(() => {
    GetBookList();
  }, [selectedCategories, selectedGenre, selectedMinPrice, selectedMaxPrice]);
  const GetBookList = () => {
    const Categories = categoriesItems;
    const Genre = genreItems;
    const minPrices = selectedMinPrice;
    const maxPrices = selectedMaxPrice;
    GetBookListWithFilters(Categories, Genre, minPrices, maxPrices).then(e => {
      setBookListFilterData(e?.results);
      handleGetWishList(e?.results, "fisrtTime")
    });
  };
  const setPriceValue = e => {
    setSelectedMinPrice(e[0]);
    setSelectedMaxPrice(e[1]);
  };
  const goToBookDetailsPage = e => {
    sessionStorage.setItem("bookDetail", JSON.stringify(e));
    navigate("/BookDescription");
  }
  const handleGetWishList = (e, r) => {
    getWishList().then((ele) => {
      if (r == "not remove") {
        for (let value of Object.values(ele?.results)) {
          if (value.book == e.id) {
            const data = {
              id: e.id
            }
            setGetWishListData(prev => [...prev, data]);
          }
        }
      } else if(r == "fisrtTime"){
        for (let value of Object.values(ele?.results)) {
             e.map((items) => {
              if (value.book == items.id) {
                const data = {
                  id:  items.id
                }
                setGetWishListData(prev => [...prev, data]);
              }
          })
        }
      }
      else {
        const index = getWishListData.findIndex(({ id }) => id === e.id);
        if (index !== -1) {
          setGetWishListData([
            ...getWishListData.slice(0, index),
            ...getWishListData.slice(index + 1)
          ]);
        }
      }
    })
  }
  const handleAddWishList = (e) => {
    for (let value of Object.values(e?.printed_book_details)) {
      if (value.name == "Paper Back") {
        createAndRemoveWishList(value.id).then((ele) => {
          if (ele?.msg == 'book remove from wishlist') {
            handleGetWishList(e, "remove")
          } else {
            handleGetWishList(e, "not remove")
          }
        })
      }
    }
  }
  const handleShoppingCart = (e) => {
   
  }
  React.useEffect(() => {
    GetGenrelist().then(ele => {
      setGenreList(ele.data);
    });
  }, []);
  return (
    <>
      <section className="BookList_MainWrapper">
        <div className="Filter-Categories_Wrapper">
          <div className="Filter_Content_wrp">
            <div className="Category_Item1">
              <div className="category-heading">
                <h4>categories</h4>
              </div>
              <ul className="filter-catgry">
                {categories.map((elem, index) => (
                  <li key={index}>
                    <span>
                      <input
                        type="checkbox"
                        id="Print"
                        name="Print"
                        onChange={e => {
                          if (e.target.checked) {
                            setSelectedCategories([
                              ...selectedCategories,
                              elem,
                            ]);
                            setCategoriesItems([
                              ...categoriesItems,
                              elem?.value,
                            ]);
                          } else {
                            setSelectedCategories(
                              selectedCategories.filter(
                                people => people?.id !== elem?.id
                              )
                            );
                            setCategoriesItems(
                              categoriesItems.filter(
                                element => element !== elem?.value
                              )
                            );
                          }
                        }}
                        value={selectedCategories}
                      />
                      {/* <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        value={elem?.name}
                        inputProps={{ 'aria-label': 'controlled' }}
                      /> */}
                    </span>
                    <p>{elem?.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="Category_Item1">
              <div className="category-heading">
                <h4>genre</h4>
              </div>
              <ul className="filter-catgry">
                {genreList &&
                  genreList.map((elem, index) => (
                    <li key={index}>
                      <span>
                        <input
                          type="checkbox"
                          id="Print"
                          name="Print"
                          onChange={e => {
                            if (e.target.checked) {
                              setSelectedGenre([...selectedGenre, elem]);
                              setGenreItems([...genreItems, elem?.id]);
                            } else {
                              setSelectedGenre(
                                selectedGenre.filter(
                                  people => people?.id !== elem?.id
                                )
                              );
                              setGenreItems(
                                genreItems.filter(
                                  element => element !== elem?.id
                                )
                              );
                            }
                          }}
                          value={selectedGenre}
                        />
                      </span>
                      <p>{elem?.value}</p>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="PriceSlider_Wrp">
              <PriceSlider getPriceValue={setPriceValue} />
            </div>
          </div>
        </div>
        <div className="BookList_wrp">
          <div className="container">
            {" "}
            <div className="Category_Grid_Wrp">
              <div className="booklist_navigation">
                <ul className="BreadCumb ">
                  <li>
                    <Link to="/">Home</Link> /
                  </li>
                  <li>
                    <Link to="/Booklist">Book</Link>
                  </li>
                </ul>
                <ul className="pagination_view">
                  <li>
                    <Link to="#">{`< preview`}</Link>
                  </li>
                  <li>
                    <Link to="#">{`next >`}</Link>
                  </li>
                </ul>
              </div>
              <div className="category_Grid_Content">
                {/* {bookList?.map((ele, index) => ( */}
                {bookListFilterData?.map((ele, index) => (
                  <div key={index} className="Grid-item">
                    <figure>
                      <img
                        onClick={() => goToBookDetailsPage(ele)}
                        src={ele?.images[0]}
                        alt="book"
                      />
                      <div className="Cart_shop_wrp">
                        <div className="cart-content">
                          {getWishListData && getWishListData.length > 0 ? getWishListData.map((lists, index) =>
                            lists?.id == ele.id ?
                              <span key={index} onClick={() => handleAddWishList(ele)}>
                                <i className="far fa-heart short-item1" style={{color:"red"}}></i>
                              </span>
                              :
                              <span onClick={() => handleAddWishList(ele)}>
                                <i className="far fa-heart short-item1"></i>
                              </span>
                          )
                            :
                            <span onClick={() => handleAddWishList(ele)}>
                              <i className="far fa-heart short-item1"></i>
                            </span>
                          }
                          <span onClick={() => handleShoppingCart(ele)}>
                            <i className="fas fa-shopping-cart short-item1"></i>
                          </span>
                        </div>
                      </div>
                    </figure>
                    <figcaption>
                      <h3>{ele.title}</h3>
                      <h4>Mohan Kishore</h4>
                      <span key={index} className="star_wrp">
                        {ele?.book_reviews?.avg != 0
                          ? [
                            ...Array(
                              ele?.book_reviews?.avg != 0
                                ? ele?.book_reviews?.avg
                                : 1
                            ).keys(),
                          ].map(index => (
                            <i className="fas fa-star star-item"></i>
                          ))
                          : [...Array(5).keys()].map(index => (
                            <i className="far fa-star star-item"></i>
                          ))}
                      </span>
                      <strong>
                        {"₹"} {ele?.ebook_details?.epub?.original_price}
                      </strong>
                    </figcaption>
                  </div>
                ))}
              </div>
              <div className="Pagination_wrp">
                <Stack spacing={2}>
                  {/* page={page} */}
                  <Pagination count={10} />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
