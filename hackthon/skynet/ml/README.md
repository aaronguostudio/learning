# Installation
- sudo yum -y update
- sudo yum -y install yum-utils
- sudo yum -y groupinstall development
- sudo yum -y install https://centos7.iuscommunity.org/ius-release.rpm
- sudo yum -y install python36u
- python3.6 -V    // output: Python 3.6.x
- sudo yum -y install python36u-pip
- sudo pip install --upgrade pip
- sudo ln -fs /usr/bin/python3 /usr/bin/python    // Set python3.6 as default python version
  sudo ln -fs /usr/bin/pip3.6 /usr/bin/pip        // Set pip3.6 as default python version
- sudo pip install flask==0.12.2                  // Install flask package
- sudo pip install numpy
- sudo pip install matplotlib
- sudo pip install requests
- sudo pip install sklearn
- sudo pip install -U flask-cors

# Run Project
- python app.py
  The app will run on port 5000
- Endpoints:
  http://localhost:5000/status
  http://localhost:5000/predict/2018/Drill%20Pipe

