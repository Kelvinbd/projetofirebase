var dataRef = new Firebase('https://loja-de-b-default-rtdb.firebaseio.com/loja-de-bike/');

dataRef.on('value', function(snapshot) {

    var t = snapshot.val();
    var count = 0;

    for (var key in t) {
        var valor = t[key];

        console.log('chave', key);
        console.log('valor', valor);

        if(key === 'Vendedores') {

            var _itemsKey = Object.entries(valor);

            


            for (const [key2, value2] of _itemsKey) {
                count++;

                $("#tbVendedores tbody").append(

                    `<tr> +

                        <th scope="row">${count}</th> +
                       
                        <td>${value2.nome}</td> +

                        <td>${value2.telefone}</td> +

                    </tr>`

                );

            }
        }


    }

});
