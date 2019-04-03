// Users must be able to:

// create a new item
// delete an item
// Check off an item
// Uncheck an already checked off item


class Item {

  constructor(name) {
    this.name = name;
  }

  addItem(){
    let itemHTML = `<li>
                      <span class="shopping-item">${this.name}</span>
                      <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                          <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                          <span class="button-label">delete</span>
                        </button>
                      </div>
                    </li>`
    $('.shopping-list').append(itemHTML);
  }

  static deleteItem(item){
    item.remove();
  }

  static checkItem(item){
    item.toggleClass('shopping-item__checked');
  }
}

$(function(){
  $('#js-shopping-list-form').submit(function(event){
    event.preventDefault();
    let $input = $('#shopping-list-entry');
    let $name;

    if($input !== ""){
      $name = $input.val();
      let item = new Item($name);
      item.addItem();
    }else{
      return false;
    }
  })
  $('.shopping-list').on('click','.shopping-item-delete',function(){
    Item.deleteItem($(this).parent().parent());
  });
  $('.shopping-list').on('click','.shopping-item-toggle',function(){
    Item.checkItem($(this).parent().prev('.shopping-item'));
  });
});
