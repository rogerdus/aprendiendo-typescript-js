const coche = (
    function (){
        let _marca, _velocidad = 0, _puertas

        function setMarca(marca){
            _marca = marca;

            return _marca;
        }

        function getMarca(){
            return _marca;
        }

        function acelerar(){
            _velocidad++;
            return _velocidad;
        }

        function frenar(){
            _velocidad--;
            return _velocidad
        }

        function getVelocidad(){
            return _velocidad;
        }

        return{
            setMarca,
            getMarca,
            acelerar,
            frenar,
            getVelocidad,
        }
    })();


    coche.setMarca("Renault");
    coche.acelerar();
    coche.acelerar();
    coche.acelerar();
    coche.acelerar();
    coche.acelerar();
    coche.acelerar();

    console.log("Marca",coche.getMarca(),"velocidad", getVelocidad());

