
    function updateProduct(select) {
        const row = select.parentElement.parentElement;
        const priceCell = row.querySelector('.product-price');
        const photoPreview = row.querySelector('.photo-preview');
        const descriptionDiv = row.querySelector('.product-description');

        const price = parseFloat(select.options[select.selectedIndex].dataset.price) || 0;
        const photo = select.options[select.selectedIndex].dataset.photo || '';
        const description = select.options[select.selectedIndex].dataset.description || '';

        priceCell.textContent = `${price.toFixed(2)} BS.`;
        photoPreview.src = photo;
        descriptionDiv.textContent = description;

        calculateSubtotal(row.querySelector('.product-qty'));
    }


    function calculateSubtotal(input) {
        const row = input.parentElement.parentElement;
        const qty = parseFloat(input.value) || 0;
        const price = parseFloat(row.querySelector('.product-price').textContent.replace('BS.', '')) || 0;
        const subtotalCell = row.querySelector('.product-subtotal');

        const subtotal = qty * price;
        subtotalCell.textContent = `${subtotal.toFixed(2)} BS.`;
        
        updateTotal();
    }

    function updateTotal() {
        let subtotal = 0;
        document.querySelectorAll('.product-subtotal').forEach(cell => {
            subtotal += parseFloat(cell.textContent.replace('BS.', '')) || 0;
        });
        
        const iva = subtotal * 0.13;
        const total = subtotal + iva;

        document.getElementById('subtotal').textContent = `${subtotal.toFixed(2)} BS.`;
        document.getElementById('iva').textContent = `${iva.toFixed(2)} BS.`;
        document.getElementById('total').textContent = `${total.toFixed(2)} BS.`;
    }