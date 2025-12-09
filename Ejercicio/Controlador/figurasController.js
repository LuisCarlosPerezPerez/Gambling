function ImprimirResultado(tiradaActual){
    if(saldo >= 10){
        console.log(tiradaActual.fig1);
        console.log(tiradaActual.fig2);
        console.log(tiradaActual.fig3);
    switch(tiradaActual.fig1){
                case 0:
                    imgfig1.src = "Imagenes/campana.png"
                    break;
                case 1:
                    imgfig1.src = "Imagenes/limon.jpg"
                    break;
                case 2:
                    imgfig1.src = "Imagenes/cereza.jpg"
                    break;
                case 3:
                    imgfig1.src = "Imagenes/diamante.jpg"
                    break;
                case 4:
                    imgfig1.src = "Imagenes/cofre.jpg"
                    break;
            }
            switch(tiradaActual.fig2){
                case 0:
                    imgfig2.src = "Imagenes/campana.png"
                    break;
                case 1:
                    imgfig2.src = "Imagenes/limon.jpg"
                    break;
                case 2:
                    imgfig2.src = "Imagenes/cereza.jpg"
                    break;
                case 3:
                    imgfig2.src = "Imagenes/diamante.jpg"
                    break;
                case 4:
                    imgfig2.src = "Imagenes/cofre.jpg"
                    break;
            }
            switch(tiradaActual.fig3){
                case 0:
                    imgfig3.src = "Imagenes/campana.png"
                    break;
                case 1:
                    imgfig3.src = "Imagenes/limon.jpg"
                    break;
                case 2:
                    imgfig3.src = "Imagenes/cereza.jpg"
                    break;
                case 3:
                    imgfig3.src = "Imagenes/diamante.jpg"
                    break;
                case 4:
                    imgfig3.src = "Imagenes/cofre.jpg"
                    break;
            }
            
            setTimeout(() => Comprobar(tiradaActual), 10)
        } else {
            alert("Has perdido Todo")
        }
        
}
function Comprobar(tiradaActual){
        const idioma = document.getElementById("idioma").value;
            if(tiradaActual.fig3 == tiradaActual.fig1  && tiradaActual.fig1==tiradaActual.fig2){
                var audio = document.getElementById("sonido-victoria");
                audio.play();

                if(tiradaActual.fig1 == 0){
                    saldo += 30;
                    if(idioma === "Español"){
                        document.getElementById("resultado").innerHTML= "Has ganado: " + 30 +"€";
                    }else{
                        document.getElementById("resultado").innerHTML= "You won: " + 30 +"€";
                    }
                }else if(tiradaActual.fig1 ==1){
                    saldo += 10; 
                    if(idioma === "Español"){
                        document.getElementById("resultado").innerHTML= "Has ganado: " + 10 +"€";
                    }else{
                        document.getElementById("resultado").innerHTML= "You won: " + 10 +"€";
                    }
                }else if(tiradaActual.fig1 ==2){
                    saldo += 20;
                    if(idioma === "Español"){
                        document.getElementById("resultado").innerHTML= "Has ganado: " + 20 +"€";
                    }else{
                        document.getElementById("resultado").innerHTML= "You won: " + 20 +"€";
                    }
                }else if(tiradaActual.fig1 ==3){
                    saldo +=40;
                    if(idioma === "Español"){
                        document.getElementById("resultado").innerHTML= "Has ganado: " + 40 +"€";
                    }else{
                        document.getElementById("resultado").innerHTML= "You won: " + 40 +"€";
                    }
                }else if(tiradaActual.fig1 ==4){
                    saldo+=50;
                    if(idioma === "Español"){
                        document.getElementById("resultado").innerHTML= "Has ganado: " + 50 +"€";
                    }else{
                        document.getElementById("resultado").innerHTML= "You won: " + 50 +"€";
                    }
                }
            }else{
                if(idioma === "Español"){
                    document.getElementById("resultado").innerHTML= "No has gando nada";
                }else{
                    document.getElementById("resultado").innerHTML= "You won nothing";
                }
            }
            document.getElementById("saldo").value = saldo;
        }

function Girar(){
    saldo-=10;
    Guardarfig(figuras,historialGiros);
    const ultimaTirada = historialGiros[historialGiros.length - 1];
    ImprimirResultado(ultimaTirada);
}
function Retirar(){
            document.getElementById("Retirar").removeAttribute("hidden");
        }
        function Retiro(){
            var dinero= document.getElementById("DineroRetirado").value;
            let din = parseInt(dinero);
            if(din < saldo){
                saldo-=din;
                document.getElementById("saldo").value = saldo;
            }
            document.getElementById("Retirar").setAttribute("hidden", "");
        }
        function Ingresar(){
            document.getElementById("Ingresar").removeAttribute("hidden");
        }
        function Ingreso(){
            var dinero= document.getElementById("DineroIngresado").value;
            let din = parseInt(dinero);
            saldo+=din;
            document.getElementById("saldo").value = saldo;
            document.getElementById("Ingresar").setAttribute("hidden", "");
        }
        function Hora(){ 
            const ahora = new Date();
            const horas = ahora.getHours();
            const min = ahora.getMinutes();
            const sec = ahora.getSeconds();
            var horaImprimible = horas + " : " + min + " : " + sec;
            document.getElementById('reloj').value = horaImprimible;
        }

        setInterval(Hora, 100);

function Idioma(){
            const idioma = document.getElementById("idioma").value;
            if(idioma === "Español"){
                document.getElementById("labelsaldo").innerText = "Money:";
                document.getElementById("labelidioma").innerText ="Language";
                document.getElementById("botonidioma").innerText = "Change Language";
                document.getElementById("botongirar").innerText = "Spin";
                document.getElementById("botonretirar").innerText = "withdraw";
                document.getElementById("botoningresar").innerText = "Deposit";
                document.getElementById("labeldineroing").innerText = "Money to deposit";
                document.getElementById("botondineroing").innerText ="Deposit money";
                document.getElementById("labeldineroret").innerText = "Money to Withdraw";
                document.getElementById("botondineroret").innerText = "Withdraw money";
                document.getElementById("resultado").innerHTML= "";
                document.getElementById("QAudio").innerHTML="mute";
                document.getElementById("HAudio").innerHTML="unmute";
                document.getElementById("labelreloj").innerHTML = "Time:";
                document.getElementById("idioma").value ="English";
            }
            if(idioma === "English"){
                document.getElementById("labelsaldo").innerText = "Saldo:";
                document.getElementById("labelidioma").innerText ="Idioma";
                document.getElementById("botonidioma").innerText = "Cambiar Idioma";
                document.getElementById("botongirar").innerText = "Girar";
                document.getElementById("botonretirar").innerText = "Retirar Dinero";
                document.getElementById("botoningresar").innerText = "Ingresar Dinero";
                document.getElementById("labeldineroing").innerText = "Dinero a Ingresar";
                document.getElementById("botondineroing").innerText ="Ingresar dinero";
                document.getElementById("labeldineroret").innerText = "Dinero a Retirar";
                document.getElementById("botondineroret").innerText = "Retirar dinero";
                document.getElementById("resultado").innerHTML= "";
                document.getElementById("QAudio").innerHTML="Silenciar";
                document.getElementById("HAudio").innerHTML="Habilitar Sonido";
                document.getElementById("labelreloj").innerHTML = "Hora:";
                document.getElementById("idioma").value ="Español";
            }
        }
        function QuitarAudio(){
            sonido.src = "";
        }
        function HabilitarAudio(){
            sonido.src = "Sonido/slot-machine-payout-81725.mp3";
        }