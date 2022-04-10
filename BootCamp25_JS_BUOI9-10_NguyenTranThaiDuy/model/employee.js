function Employee({
  _user,
  _name,
  _email,
  _password,
  _date,
  _salaryBasic,
  _role,
  _workTime,
}) {
  this.user = _user;
  this.name = _name;
  this.email = _email;
  this.password = _password;
  this.date = _date;
  this.salaryBasic = _salaryBasic;
  this.role = _role;
  this.workTime = _workTime;
  this.sumSalary = 0;
  this.rank = ""

  this.finalSalary = function () {
    if (this.role == "Sếp") {
      this.sumSalary = this.salaryBasic * 3;
    } else if (this.role == "Trưởng phòng") {
      this.sumSalary = this.salaryBasic * 2;
    } else if (this.role == "Nhân viên") this.sumSalary = this.salaryBasic;
  };
  this.finalRank = function () {
    if (this.workTime >= 192) {
      this.rank = "Xuất sắc"
    } else if ((this.workTime >= 176) && (this.workTime < 192)) {
      this.rank = "Giỏi"
    } else if ((this.workTime >= 160) && (this.workTime < 176)) {
      this.rank = "Khá"
    } else if (this.workTime < 160) {
      console.log("trinaskdfnjqsn cq");
      this.rank = "Trung Bình"
    }
  };
}
