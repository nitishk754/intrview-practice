<?php 

function numberOfWord(string $inputStr)
{
    // $inputArr = explode(" ",$inputStr);
    // $number_of_word = count($inputArr);
    $number_of_word = str_word_count($inputStr);
    // preg_match_all()
    // print_r($inputArr);
    echo "Number of Word : {$number_of_word}";

}

numberOfWord("am I a smart person");