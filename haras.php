<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
?>
{
"nomHaras": "Emma", "ville": "Montpellier", "dateCreation": 2016, "surface": "85h", "active": true, "chevaux": [ { "nom": "Pitou", "age": 4, "ecuyer": "Hatem Reborn", "courses": [ "Grand prix de Paris", "Turfing Motion", "Rambouillet" ] }, { "nom": "Diana", "age": 7, "ecuyer": "Maxime Terrible", "courses": [ "Mille Fleurs", "Sprint in Desert", "Arc de Triomphe", "Abudhabi" ] }, { "nom": "Général du Pommeau", "age": 5, "ecuyer": "Atif Abdel", "courses": [ "Vincennes", "Longchamp", "Deauville", "Maisons-Lafitte", "Saint Cloud", "Auteuil" ] } ]
}