#!/bin/bash

string="Bigdata process framework is Hadoop, Hadoop is an open source project"

function print_tips
{
  echo "-------------------"
  echo "1 - print string len"
  echo "2 - delete Hadoop"
  echo "3 - replace first Hadoop to Mapreduce"
  echo "4 - replate all Hadoop to Mapreduce"
  echo "-------------------"   
}

function len_of_string
{
  echo "${#string}"
}

function del_hadoop
{
  echo "${string//Hadoop/}"
}

function req_hadoop_mapreduce_first
{
  echo "${string/Hadoop/mapreduce}"
}

function req_hadoop_mapreduce_all
{
  echo "${string//Hadoop/mapreduce}"
}

while true
do
  echo "[string = $string]"
  echo
  print_tips
  read -p "Please input your choice(1|2|3|4|q|Q): " choice
  case $choice in
    1)
      len_of_string
      ;;
    2)
      del_hadoop
      ;;
    3)
      req_hadoop_mapreduce_first
      ;;
    4)
      req_hadoop_mapreduce_all
      ;;
    q|Q)
      exit
      ;;
    *)
      echo "Invalid Input"
      ;;
  esac
done