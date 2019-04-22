# 2.1 变量的处理

# variable_1="I love you, do you love me"
# echo $variable_1
# var1=${variable_1#*ov}
# echo $var1
# var2=${variable_1##*ov}
# echo $var2
# var3=${variable_1%ov*}
# echo $var3
# var4=${variable_1%%ov*}
# echo $var4
# var5=${variable_1/love/hate}
# echo $var5
# var6=${variable_1//love/hate}
# echo $var6
# var7=${PATH//bin/BIN}
# echo $var7

# 2.2 字符串的处理
variable_1="Hello World"
echo ${#variable_1}
len=`expr length "$variable_1"`

index=`expr index "$variable_1" FDW` #取字符的位置
index=`expr match "$variable_1" World` #取字符的位置，从头开始匹配

# 提取子串
${str:position}
${str:position:length}
${str:-position} / ${str:(position)} #索引从 0 开始

expr substr $string $position $length #索引从 1 开始
sub=`expr substr "$str" 10 5`

# 2.6 命令替换
# all users