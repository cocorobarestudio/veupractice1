// var app = new Vue({
//   el: "#app",
//   data: {
//     isActive: true,
//     list: [
//       { name: "apple", price: 500 },
//       { name: "pineapple", price: 2500 },
//       { name: "mango", price: 3500 },
//     ],
//   },
// });

Vue.filter("number_format", function (val) {
  return val.toLocaleString();
});
var app = new Vue({
  el: "#app",
  data: {
    //表示中の商品数→computed内に移動　countプロパティ

    //セール対象のチェック状態（true：チェックあり、false:チェックなし）
    showSaleItem: false,
    //「送料無料」のチェック状態（true：チェックあり、false:チェックなし）
    showDelvFree: false,
    //並び替えの選択値（1:標準, 2:価格が安い値）
    sortOrder: 1,
    //商品リスト
    products: [
      {
        id: 1,
        name: "Micheal<br>スマホケース1",
        price: 1580,
        image: "img/01.jpg",
        delv: 0,
        isSale: true,
      },
      {
        id: 2,
        name: "Micheal<br>スマホケース2",
        price: 1480,
        image: "img/02.jpg",
        delv: 0,
        isSale: true,
      },
      {
        id: 3,
        name: "Micheal<br>スマホケース3",
        price: 1380,
        image: "img/03.jpg",
        delv: 400,
        isSale: false,
      },
      {
        id: 4,
        name: "Micheal<br>スマホケース4",
        price: 1280,
        image: "img/04.jpg",
        delv: 200,
        isSale: true,
      },
      {
        id: 5,
        name: "Micheal<br>スマホケース5",
        price: 1180,
        image: "img/05.jpg",
        delv: 400,
        isSale: false,
      },
      {
        id: 6,
        name: "Micheal<br>スマホケース6",
        price: 980,
        image: "img/06.jpg",
        delv: 0,
        isSale: false,
      },
    ],
  },
  computed: {
    //絞り込み後のリストを返す算出プロパティ
    filteredList: function () {
      var newList = [];
      for (var i = 0; i < this.products.length; i++) {
        var isShow = true;
        if (this.showSaleItem && !this.products[i].isSale) {
          isShow = false;
        }
        if (this.showDelvFree && this.products[i].delv > 0) {
          isShow = false;
        }
        if (isShow) {
          newList.push(this.products[i]);
        }
      }

      if (this.sortOrder === 1) {
      } else if (this.sortOrder === 2) {
        newList.sort(function (a, b) {
          return a.price - b.price;
        });
      }
      return newList;
    },
    count: function () {
      return this.filteredList.length;
    },
  },

  // watch: {
  //   //セール対象チェックボックスの状態を監視するウォッチャ
  //   showSaleItem: function (newVal, oldVal) {
  //     console.log("sale呼び出されました。");
  //   },
  //   //送料無料チェックボックスの状態を監視するウォッチャ
  //   showDelvFree: function (newVal, oldVal) {
  //     console.log("Delv呼び出されました。");
  //   },
  // },
});
