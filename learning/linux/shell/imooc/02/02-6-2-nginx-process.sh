#!/bin/bash

# the processes will contain a grep process
ps -ef | grep process-name

# -v remove
ps -ef | grep process-name | grep -v grep

# how many lines
ps -ef | grep process-name | grep -v grep | wc -l

nginx_process_num=$(ps -ef | grep process-name | grep -v grep | wc -l)
if [ $nginx_process_num -eq 0 ];then
  # systemctl start nginx
  echo "Need restart nginx"
fi
