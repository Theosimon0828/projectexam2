import React from "react";
import axios from "axios";

const ProductContext = React.createContext()


class ProductData extends React.Component {
    state = {
        products:[],
        detailProduct:{},
        cart:[],
        fav:[],
        modalOpen:false,
        modalProduct:{},
        modalOpenFav:false,
        modalProductFav:{},
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
        favSubTotal:0,
        favTax:0,
        favTotal:0,

    }


    componentDidMount(){
        this.setProducts();
        axios.get('http://localhost:1337/products').then(res => {
            res.data.map(v => {
                this.setState({detailProduct:v, modalProduct:v, modalProductFav:v})
            })
        })
        
    }



    setProducts = () => {
        axios.get('http://localhost:1337/products').then(res => {
            let tempProducts = [];
            res.data.forEach(item => {
                const singleItem = {...item};
                tempProducts = [...tempProducts, singleItem]
            })
            this.setState(() => {
                return {products:tempProducts}
            })
        })
    }

    getItem = id => {
        const product = this.state.products.find(item => item.id === id)
        return product
    }

    handleDetail= (id) => {
        const product = this.getItem(id)
        this.setState(() => {
            return {detailProduct: product}
        })
    }

    addCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
            return {products:tempProducts, cart:[...this.state.cart, product]};
        },
        () => {
            this.addTotals()
        }
        )};

    addFav = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id))
        const product = tempProducts[index]
        product.inFav = true;
        const price = product.price;
        product.total = price;
        this.setState(
            () => {
            return {products:tempProducts, fav:[...this.state.fav, product]};
        },
        () => {
            this.addTotalsFav()
        }
        )};

    openModal = id => {
        const product = this.getItem(id)
        this.setState(() => {
            return {modalProduct:product, modalOpen:true}
        })
    }

    closeModal = () => {
        this.setState(() => {
            return {modalOpen:false}
        })
    }

    openModalFav = id => {
      const product = this.getItem(id)
      this.setState(() => {
          return {modalProductFav:product, modalOpenFav:true}
      })
  }

    closeModalFav = () => {
        this.setState(() => {
            return {modalOpenFav:false}
        })
    }

    increment = id => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => {
          return item.id === id;
        });
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count * product.price;
        this.setState(() => {
          return {
            cart: [...tempCart]
          };
        }, this.addTotals);
      };

    decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => {
        return item.id === id;
    });
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    if (product.count === 0) {
        this.removeItem(id);
    } else {
        product.total = product.count * product.price;
        this.setState(() => {
        return { cart: [...tempCart] };
        }, this.addTotals);
    }
    };

    clearCart = () => {
        this.setState(
          () => {
            return { cart: [] };
          },
          () => {
            this.setProducts();
            this.addTotals();
          }
        );
      };

      clearCartFav = () => {
        this.setState(
          () => {
            return { fav: [] };
          },
          () => {
            this.setProducts();
            this.addTotalsFav();
          }
        );
      };


    removeItem = id => {
    console.log('asdasd')
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    const index = tempProducts.indexOf(this.getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    tempCart = tempCart.filter(item => {
        return item.id !== id;
    });

    this.setState(() => {
        return {
        cart: [...tempCart],
        products: [...tempProducts]
        };
    }, this.addTotals);
    };

    removeItemFav = id => {
      console.log('asdasd')
      let tempProducts = [...this.state.products];
      let tempFav = [...this.state.fav];
  
      const index = tempProducts.indexOf(this.getItem(id));
      let removedProduct = tempProducts[index];
      removedProduct.inFav = false;
      removedProduct.count = 0;
      removedProduct.total = 0;
  
      tempFav = tempFav.filter(item => {
          return item.id !== id;
      });
  
      this.setState(() => {
          return {
          fav: [...tempFav],
          products: [...tempProducts]
          };
      }, this.addTotalsFav);
      };

    getTotals = () => {
        let subTotal = 0;
        this.state.cart.map(item => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;
        return {
          subTotal,
          tax,
          total
        };
      };

    getTotalsFav = () => {
      let subTotal = 0;
      this.state.fav.map(item => (subTotal += item.total));
      const tempTax = subTotal * 0.1;
      const tax = parseFloat(tempTax.toFixed(2));
      const total = subTotal + tax;
      return {
        subTotal,
        tax,
        total
      };
    };

    addTotals = () => {
        const totals = this.getTotals();
        this.setState(
          () => {
            return {
              cartSubTotal: totals.subTotal,
              cartTax: totals.tax,
              cartTotal: totals.total
            };
          },
          () => {
            // console.log(this.state);
          }
        );
      };

    addTotalsFav = () => {
        const totals = this.getTotalsFav();
        this.setState(
          () => {
            return {
              favSubTotal: totals.subTotal,
              favTax: totals.tax,
              favTotal: totals.total
            };
          },
          () => {
            // console.log(this.state);
          }
        );
      };

    render(){
        return(
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail: this.handleDetail,
                addCart:this.addCart,
                addFav:this.addFav,
                openModal: this.openModal,
                closeModal: this.closeModal,
                openModalFav: this.openModalFav,
                closeModalFav: this.closeModalFav,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                removeItemFav: this.removeItemFav,
                clearCart: this.clearCart,
                clearCartFav: this.clearCartFav
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductData, ProductConsumer}