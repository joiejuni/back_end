
let data = document.getElementById("dataEl").innerHTML;
  let _data = JSON.stringify(data);

  // 결과를 HTML에 삽입
  document.getElementById("dataEl").innerHTML = _data;