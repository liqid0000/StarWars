import React, { Component } from 'react';
import Ships from '../../components/Ships/Ships'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


class Articles extends Component { 
    state = {
        ships: [],
        shopList:[],
        quantityShopList: 0,
    }

    componentDidMount() { 
        axios.get(`https://swapi.dev/api/starships`,{ crossDomain: true })
          .then(res => {
              const ships = res.data.results;
              const updateShips = ships.map((ship,index) =>{
                return {
                    ...ship,
                    id:index
                }
              });
            this.setState({ships: updateShips})        
          })
      }


      addToShoppingList = (event, id) =>{       
          
        const itemShopListIndex = this.state.shopList.findIndex(p=>{
          return p.id === id;
        });          

        if(itemShopListIndex === -1 ){

            const newItemShopList = {
                id: id, quantity: event
            };
          
            const shopList = [...this.state.shopList];

            shopList.push(newItemShopList);

            var counter=0;

            shopList.forEach(p=>{                
                counter = counter + parseInt(p.quantity,10);                
             })
           
            this.setState({
                shopList: shopList,
                quantityShopList: counter
            });
         
        }else{
            const itemShopList = {
                ...this.state.shopList[itemShopListIndex]
            };

            itemShopList.quantity = event;

            const shopList = [...this.state.shopList];

            shopList[itemShopListIndex] = itemShopList;

           let counter =0;

            shopList.forEach(p=>{              
                 counter = counter + parseInt(p.quantity,10);                
             })
             
            this.setState({
                shopList: shopList,
                quantityShopList: counter
            });         

        }                  
       
      };

    render () {

        let ships = (                          
            <div className="container-fluid content-row">
                <div className="row">
                    <Ships
                        ships = {this.state.ships}
                        clicked ={this.addToShoppingList}
                    />      
                </div>               
            </div>               
        );

        let navbar = (
            <div>
                <Navbar
                counter = {this.state.quantityShopList}
                />  
            </div>
        );

        return (
            <div>
                <section className="Articles">   
                   {navbar}             
                   {ships}                              
                </section>              
            </div>
        );
    }
}

export default Articles;