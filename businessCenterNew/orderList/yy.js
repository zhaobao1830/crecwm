function ee() {
  for (var i = 0;i < dataJsonList.length;i++){
    tbodyList += "<tr>"
    tbodyList += "<td><input type='checkbox' name='orderLists' class='"+dataJsonList[i].id+"'></td>"
    tbodyList += "<td>"+dataJsonList[i].paycode+"</td>"
    tbodyList += "<td>"+dataJsonList[i].codeamount+"</td>"
    tbodyList += "<td>"+dataJsonList[i].creator+"</td>"
    if (dataJsonList[i].runOrderList.length > 1) {
      tbodyList += "<td width='800'>"
      tbodyList += "<table>"
      for (var j = 0; j < dataJsonList[i].runOrderList.length; j++) {
        tbodyList += "<tr>"
        tbodyList += "<td><input type='checkbox' name='runOrderLists' class='"+dataJsonList[i].runOrderList[j].orderNO+"'></td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].orderNO+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].pubstate+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].amount+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].orderDate+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].invoiceTitle+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].recvGoName+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].recvMobile+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].invoiceRecvName+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].invoiceRecvMobile+"</td>"
        tbodyList += "<td>"+dataJsonList[i].runOrderList[j].businessNotes+"</td>"
        tbodyList += "</tr>"
      }
      tbodyList += "</table>"
      tbodyList += "</td>"
    } else {
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].orderNO+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].pubstate+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].amount+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].orderDate+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].invoiceTitle+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].recvGoName+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].recvMobile+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].invoiceRecvName+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].invoiceRecvMobile+"</td>"
      tbodyList += "<td>"+dataJsonList[i].runOrderList[0].businessNotes+"</td>"
    }
    tbodyList += "</tr>"
  }
}