<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Buổi 1</title>
</head>
<body>
    <?php
        //1. Cú pháp in ra màn hình
        echo "Hello World <br>";
        echo "PHP";

        //2. Khởi tạo biến
        $ten = 'Thanh';
        $tuoi = 20;

        echo '<br>Xin chào '.$ten.' '.$tuoi.' tuổi';

        //3. Hằng số 
        define("soPi","3.14");
        echo '<br>'.soPi.'<br>';
        
        //5. Chuỗi
        //5.1 Kiểm tra độ dài của chuỗi
        echo strlen($ten).'<br>';
        //5.2 đếm số từ trong chuỗi
        echo str_word_count($ten).'<br>';
        //5.3 tìm kiếm và thay thế kí tự trong chuỗi
        echo strpos($ten, 'a').'<br>';
        echo str_replace("Thanh", "Phuc Thanh", $ten).'<br>';

        //6. Toán tử 
        $sothunhat = 20;
        $sothuhai  = 5;
        // echo $sothunhat + $sothuhai.'<br>'; //+-*/
        // echo $sothunhat %= $sothuhai;

        //7. Câu lệnh điều kiện
        $tong = $sothunhat + $sothuhai;
        if($tong > 15){
            echo 'Tổng là '.$tong.' lớn hơn 15 <br>';
        }else if($tong === 15){
            echo 'Tổng là '.$tong.'<br>';
        }else{
            echo 'Tổng là '.$tong.' nhỏ hơn 15 <br>';
            
        }
        //8. Switch case
        $color = "red";
        switch($color){
            case "red":
                echo "is red";
                break;
            case "blue":
                echo "is blue";
                break;
            default:
                echo "no color";
                break;
        }

        //9. for
        for($i = 0;$i <100;$i++){
            echo $i;
        }
    ?>
</body>
</html>