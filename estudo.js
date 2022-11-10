        documento . write ( "O cubo de " + i + " é " + i + " x " + i + " x " + i + " = " + ( i * i * i ) + "<br>" ) ;
    }
}
função  moeda ( atual ) {
    retorno  atual . toLocaleString ( 'pt-br' , { estilo : 'moeda' ,  moeda : 'BRL' } ) ;
}
 tapete de função ( ) {  
    deixe  v  =  documento . getElementById ( "valor" ) . valor ;
função  moeda ( atual )  {
    retorno  atual . toLocaleString ( 'pt-br' ,  {  estilo : 'moeda' ,  moeda : 'BRL'  } ) ;
  }

  função  total ( )  {
    seja  c  =  documento . getElementById ( "valor" ) . valor ;
    seja  j  =  documento . getElementById ( "juros" ) . valor ;
    seja  t  =  documento . getElementById ( "bagunça" ) . valor ;
    seja  t  =  documento . getElementById ( "meses" ) . valor ;
    let  r  =  moeda ;


    if ( ! Número ( v ) ) {
        alert ( "O Capital deve ser numérico." ) ;
        documento . getElementById ( "juros" ) . valor  =  "" ;
        documento . getElementById ( "juros" ) . foco ( ) ;
        Retorna
    if  ( ! Número ( c ) )  {

      alert ( "O capital deve ser numeros." ) ;
      documento . getElementById ( "valor" ) . valor  =  "" ;
      documento . getElementById ( "valor" ) . foco ( ) ;
      retorno ;
    }
    if ( ! Número ( j ) ) {
        alert ( "Juros deve ser número." ) ;
        documento . getElementById ( "valor" ) . valor  =  "" ;
        documento . getElementById ( "valor" ) . foco ( ) ;
        Retorna

    if  ( ! Número ( j ) )  {
      alert ( "O juros deve ser numeros." ) ;
      documento . getElementById ( "juros" ) . valor  =  "" ;
      documento . getElementById ( "juros" ) . foco ( ) ;
      retorno ;
    }
    if ( ! Número ( t ) ) {
        alert ( "Juros deve ser número." ) ;
        documento . getElementById ( "meses" ) . valor  =  "" ;
        documento . getElementById ( "meses" ) . foco ( ) ;
        Retorna

    if  ( ! Número ( t ) )  {
      alert ( "O meses deve ser numeros." ) ;
      documento . getElementById ( "meses" ) . valor  =  "" ;
      documento . getElementById ( "meses" ) . foco ( ) ;
      retorno ;
    }
    seja  r  =  0 ;
    for ( deixe  i = 1 ;  i <= t ;  i ++ ) {
        r  =  v  *  ( 1 + ( j / 100 ) ) ;
        v  =  r ;
        //document.write("Mês " + i + " = " + moeda(r) + "<br>");

    deixe -  me  =  "" ;

    for  ( deixe  i  =  1 ;  i  <=  t ;  i ++ )  {
      r  =  c  *  ( 1+ ( j / 100 ) ) ; _    
      mes  +=  "Mês "  +  i  +  " valor: "  +  moeda ( r )  +  "<br>" ;
      //document.write("Mês " + i + " valor: " + moeda(r) + "<br>");
      c  =  r ;
    }
    documento . getElementById ( "totalGeral" ) . innerHTML  =  "Total: "  + moeda ( r ) ;
    //document.write("Resultado " + moeda(r));
}
    documento . getElementById ( "mes" ) . innerHTML = mes ;

    documento . getElementById ( "total" ) . innerHTML = "Total: " + moeda ( r ) ;
    //document.write("Resultado: " + moeda(r));
  }

  função  limpar ( ) {
    documento . getElementById ( "mes" ) . innerHTML  =  "" ;
    documento . getElementById ( "total" ) . innerHTML  =  "0,00" ;
    documento . getElementById ( "valor" ) . valor  =  "" ;
    documento . getElementById ( "juros" ) . valor  =  "" ;
    documento . getElementById ( "meses" ) . valor  =  "" ; 
  
