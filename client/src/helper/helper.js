import _ from 'lodash';


export function getSum(transaction,type){
    let sum = _(transaction)
             .groupBy("type")
             .map((objs,key) => {
               if(!type) return _.sumBy(objs,"Amount"); //[300,350,500]
               return {
                'type': key,
                'color': objs[0].color,
                 'total': _.sumBy(objs,'Amount')
               }
             })
             .value()
        return sum

}   

export function getLabels(transaction){
    let amountsum = getSum(transaction,"type");
    let Total =_.sum(getSum(transaction));
    let percent =_(amountsum)
                .map(objs => _.assign(objs, {percent : (100 * objs.total) / Total}))
                .value()
    return percent;
}   


export function chart_Data(transaction, custom){

  let bg =_.map(transaction, a => a.color);
  bg =_.uniq(bg);
  console.log(bg)

  let dataValue = getSum(transaction) 

  const config = {
    data:{
      datasets: [{
        data: dataValue,
        backgroundColor:bg,
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10
      }]
    }, 
      options: {
        cutout: 115
      }
    }
    return custom ?? config;
}

export function getTotal(transaction){
  return _.sum(getSum(transaction))
} 