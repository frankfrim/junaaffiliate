$(document).ready(function () {
			
			
			$('.addmorebtn').on('click', function (e) {
				e.preventDefault();
				var content = $('<tr> <td> <img src="http://www.gedachtegoed.nl/img/mobileimg1.png" alt="" class="image-swap"> </td> <td> <input type="text" value="1" id="qty" class="form-control"> </td> <td> <select class="sizeSelect form-control"> <option value="--">--</option> <option value="S (4)">S (4)</option> <option value="M (6-8)">M (6-8)</option> <option value="L (10-12)">L (10-12)</option> <option value="XL (14-16)">XL (14-16)</option> <option value="2XL (18-20)">2XL (18-20)</option> </select> </td> <td> <select class="brandName form-control"> <option value="http://www.gedachtegoed.nl/img/mobileimg1.png" data-price="19.99">Bella Women\'s Flowy Tank Black</option> <option value="http://www.gedachtegoed.nl/img/mobileimg2.png" data-price="20.99">Bella Women\'s Flowy Tank Black1</option> <option value="http://www.gedachtegoed.nl/img/mobileimg3.png" data-price="25.99">Bella Women\'s Flowy Tank Black2</option> <option value="http://www.gedachtegoed.nl/img/mobileimg4.png" data-price="27.99">Bella Women\'s Flowy Tank Black3</option> <option value="http://www.gedachtegoed.nl/img/mobileimg5.png" data-price="28.99">Bella Women\'s Flowy Tank Black4</option> </select> </td> <td> <p>$<span class="price">19.99</span></p> <span class="remove">Remove</span> </td> </tr>');
					$('.addCartTable').append(content);
					$('.remove').show();
			});
			$(document).on('click', '.remove', function (e) {
				console.log($('.addCartTable').find('tr').length);
				$(this).parents('tr').remove();
				if(($('.addCartTable').find('tr').length-1) == 1){
					console.log('pass');
					$('.remove').hide();
					event.stopPropagation();
				}
			});
		   $(document).on('change', '.brandName',function(){
		     console.log($(this).val());
		     $(this).parents('tr').find('img.image-swap').attr("src",$(this).val());
		     $(this).parents('tr').find('.price').html($(this).find('option:selected').data('price'));
		   });
		   $('.add-product-button').on('click', function (e) {
				e.preventDefault();
				console.log($(this).data('discount'));
				var price = $(this).data('discount');
				var content = $('<tr> <td> <img src="http://www.gedachtegoed.nl/img/mobileimg1.png" alt="" class="image-swap"> </td> <td> <input type="text" value="1" id="qty" class="form-control"> </td> <td> <select class="sizeSelect form-control"> <option value="--">--</option> <option value="S (4)">S (4)</option> <option value="M (6-8)">M (6-8)</option> <option value="L (10-12)">L (10-12)</option> <option value="XL (14-16)">XL (14-16)</option> <option value="2XL (18-20)">2XL (18-20)</option> </select> </td> <td> <select class="brandName form-control"> <option value="http://www.gedachtegoed.nl/img/mobileimg1.png" data-price="19.99" data-selected="Bella Women\'s Flowy Tank Black">Bella Women\'s Flowy Tank Black</option> <option value="http://www.gedachtegoed.nl/img/mobileimg2.png" data-price="20.99" data-selected="Bella Women\'s Flowy Tank Black1">Bella Women\'s Flowy Tank Black1</option> <option value="http://www.gedachtegoed.nl/img/mobileimg3.png" data-price="25.99" data-selected="Bella Women\'s Flowy Tank Black2">Bella Women\'s Flowy Tank Black2</option> <option value="http://www.gedachtegoed.nl/img/mobileimg4.png" data-price="27.99"  data-selected="Bella Women\'s Flowy Tank Black3">Bella Women\'s Flowy Tank Black3</option> <option value="http://www.gedachtegoed.nl/img/mobileimg5.png" data-price="28.99" data-selected="Bella Women\'s Flowy Tank Black4">Bella Women\'s Flowy Tank Black4</option> </select> </td> <td> <p>$<span class="price">'+price+'</span></p> <span class="remove">Remove</span> </td> </tr>');
					$('.addCartTable').append(content);
					$('.remove').show();
					$('.id_100 option')
				     .removeAttr('select')
				     .filter('[data-selected='+ $(this).data('select') +']')
				         .attr('selected', true);
			});
			$(document, '#tp_result').on("submit", ".cart", function(e){
                e.preventDefault(e);
                $('#id').trigger('click');
            });
		});
