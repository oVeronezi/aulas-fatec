<?php
    // $pessoa = array("Maria", 25, 1.70, 47.8, true);
    //  //usando for

    //  for($x=0;$x<5; $x++)
    //  {
    //      echo $pessoa[$x]."<br>";
    //  }
    //  echo"<br><br>";

    //  //usando foreach de forma reduzida

    //  foreach($pessoa as $dado)
    //  {
    //      echo $dado."<br>";
    //  }

    // //usando foreach de forma completa
    // foreach($pessoa as $indice=>$dado)
    // {
    //     echo "$indice => $dado<br>";
    // }
    
    // //colocando mais um item na matriz
    // $pessoa[] = 'Castanho';

    // echo "<br><br>";

    //usando foreach de forma reduzida
    // foreach($pessoa as $dado)
    // {
    //     echo "$dado<br>";
    // }

    //definindo um array com índices nomeados
    // $pessoa1 = array("nome"=>"Maria", "idade"=>25, "altura"=>1.70, "peso"=>47.8, "casado"=>false);

    // foreach($pessoa1 as $indice => $dado)
    // {
    //     echo "$indice - $dado.<br>";
    // }

    // if($pessoa1['casado'])
    // {
    //     echo 'Casado(a)';
    // }
    // else
    // {
    //     echo 'Solteiro(a)';
    // }

    $notas = array(
//                  0      1    2    3
    /*0*/ array('carlos', 5.5, 6.0, 7.0),
    /*1*/ array('pedro', 10.0, 10.0, 10.0),
    /*2*/ array('fatima', 2.5, 10.0, 10.0)
    );

    //usando para mostrar os dados da matriz
    for($linha=0; $linha<3; $linha++)
    {
        for($coluna=0; $coluna<4; $coluna++)
        {
            echo "{$notas[$linha][$coluna]}.<br>";
        }
        echo '-----------<br>';
    }

    echo "<br>------------<br>";

    foreach($notas as $vetor)
    {
        foreach($vetor as $dado)
        {
            echo "$dado.<br>";
        }
    }  
?>