import React  from 'react'

const RowSell = ({data}) => {
    let exchangeData = data.rates;
    let items = [];
    let i = 0;
    for(let key in exchangeData) { 
        items[i] = {
            curName : key,
            value : ((exchangeData[key]*98)/100).toFixed(6) 
        };
        i++;
    }

    return (
       
            <tbody>
                {
                    items.map((element, index) => (
                        <tr key={element.curName}>
                          {index %2 !== 0 ? 
                            <td className="border py-2 px-6 bg-white-100 text-center">{element.value}</td> 
                            : 
                            <td className="border py-2 px-6 bg-gray-100 text-center">{element.value}</td> 
                            }
                        </tr>
                    ))
                }
            </tbody>
        
    )
}

export default RowSell;