const nextElement = document.querySelectorAll(".fieldset-next-btn");
const fieldSets = document.querySelectorAll("fieldset");
const selects = document.querySelectorAll("#fieldset1 select");
let validateStatus = false;
let currentField = 1;
document.querySelectorAll("input").forEach((ele) => {
  ele.onpaste = function (e) {
    e.preventDefault();
  };
});
// ================================== FieldSet1 =====================================
// Select Validation
selects.forEach((select) => {
  currentField = select.parentElement.getAttribute("data-step-num");
  let errorEle = document.createElement("span");
  errorEle.classList.add("text-danger");
  errorEle.textContent = "لو سمحت قم بالاختيار";
  select.onchange = function () {
    if (this.value == this.firstElementChild.value) {
      this.after(errorEle);
    } else {
      errorEle.remove();
    }
  };
});

nextElement[0].addEventListener("click", function () {
  let selectArray = Array.from(selects);
  for (let i = 0; i < selectArray.length; i++) {
    if (selectArray[i].value == selectArray[i].firstElementChild.value) {
      validateStatus = false;
      Swal.fire({
        icon: "error",
        title: "البيانات خاطئة",
        confirmButtonText: "إغلاق",
      });
      break;
    } else {
      validateStatus = true;
    }
  }
  if (validateStatus == true) {
    fieldSets.forEach((e) => {
      e.classList.remove("active-fieldset");
    });
    document
      .getElementById(`fieldset${this.getAttribute("data-step-num")}`)
      .classList.add("active-fieldset");
  }
});

// ======================================== Fieldset2 ===========================================
let v_2_1 = false;
let v_2_2 = false;
let v_2_3 = false;
let v_2_4 = false;

const vali_10 = document.querySelectorAll(".vali-10");
const vali_10_Array = Array.from(vali_10);
// ID, number Validation
vali_10.forEach((idv2) => {
  idv2.onblur = function () {
    if (this.value.length != 10) {
      this.nextElementSibling.classList.remove("d-none");
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  };
});

// IBAN Validation
document.querySelector(".vali-iban").onblur = function () {
  if (this.value.length != 24) {
    this.nextElementSibling.classList.remove("d-none");
    v_2_2 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_2_2 = true;
  }
};

// Check date
document.querySelector(".vali-date1").onclick = function () {
  this.type = "date";
  this.showPicker();
};
document.querySelector(".vali-date1").onblur = function () {
  if (this.value == "") {
    this.nextElementSibling.classList.remove("d-none");
    this.type = "text";
    v_2_3 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_2_3 = true;
  }
};

// Check name
document.querySelector(".vali-name").onblur = function () {
  if (this.value == "") {
    this.nextElementSibling.classList.remove("d-none");
    v_2_4 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_2_4 = true;
  }
};

nextElement[1].addEventListener("click", function () {
  for (let i = 0; i < vali_10_Array.length; i++) {
    if (vali_10_Array[i].value.length != 10) {
      v_2_1 = false;
      break;
    } else {
      v_2_1 = true;
    }
  }
  const validateStatus2 = v_2_1 + v_2_2 + v_2_3 + v_2_4;
  if (validateStatus2 == 4) {
    fieldSets.forEach((e) => {
      e.classList.remove("active-fieldset");
    });
    document
      .getElementById(`fieldset${this.getAttribute("data-step-num")}`)
      .classList.add("active-fieldset");
  } else {
    Swal.fire({
      icon: "error",
      title: "الرجاء إدخال البيانات بشكل صحيح",
      confirmButtonText: "إغلاق",
    });
  }
});

// ================================= Fieldset3 =====================================

let v_3_1 = false;
let v_3_2 = false;
let v_3_3 = false;
const vali2_10 = document.querySelectorAll(".vali2-10");
const vali2_10_Array = Array.from(vali2_10);
// ID, number Validation
vali2_10.forEach((idv2) => {
  idv2.onblur = function () {
    if (this.value.length != 10) {
      this.nextElementSibling.classList.remove("d-none");
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  };
});

// Check date
document.querySelector(".vali-date2").onclick = function () {
  this.type = "date";
  this.showPicker();
};
document.querySelector(".vali-date2").onblur = function () {
  if (this.value == "") {
    this.nextElementSibling.classList.remove("d-none");
    this.type = "text";
    v_3_2 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_3_2 = true;
  }
};

// Check name
document.querySelector(".vali-name2").onblur = function () {
  if (this.value == "") {
    this.nextElementSibling.classList.remove("d-none");
    v_3_3 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_3_3 = true;
  }
};

nextElement[2].addEventListener("click", function () {
  for (let i = 0; i < vali2_10_Array.length; i++) {
    if (vali2_10_Array[i].value.length != 10) {
      v_3_1 = false;
      break;
    } else {
      v_3_1 = true;
    }
  }
  const validateStatus3 = v_3_1 + v_3_2 + v_3_3;
  if (validateStatus3 == 3) {
    fieldSets.forEach((e) => {
      e.classList.remove("active-fieldset");
    });
    document
      .getElementById(`fieldset${this.getAttribute("data-step-num")}`)
      .classList.add("active-fieldset");
  } else {
    Swal.fire({
      icon: "error",
      title: "الرجاء إدخال البيانات بشكل صحيح",
      confirmButtonText: "إغلاق",
    });
  }
});

//  ================================== fieldset4 =============================

let validateStatus4 = false;
let v_4_1 = false;
let v_4_2 = false;
const fieldset4Select = document.querySelectorAll("#fieldset4 select");
const arrayFieldset4Select = Array.from(fieldset4Select);
const fieldset4Input = document.querySelector(
  '#fieldset4 input[type="number"]'
);
fieldset4Select.forEach((select4) => {
  select4.onchange = function () {
    if (this.value == this.firstElementChild.value) {
      this.nextElementSibling.classList.remove("d-none");
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  };
});

fieldset4Input.onblur = function () {
  if (this.value == "") {
    this.nextElementSibling.classList.remove("d-none");
    v_4_2 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_4_2 = true;
  }
};
fieldset4Input.onkeydown = function (e) {
  if (this.value.length >= 2) {
    if (e.key != "Backspace") e.preventDefault();
  }
};

nextElement[3].addEventListener("click", function () {
  for (let i = 0; i < arrayFieldset4Select.length; i++) {
    if (
      arrayFieldset4Select[i].value ==
      arrayFieldset4Select[i].firstElementChild.value
    ) {
      v_4_1 = false;
      break;
    } else {
      v_4_1 = true;
    }
  }

  validateStatus4 = v_4_1 + v_4_2;
  if (validateStatus4 == 2) {
    fieldSets.forEach((e) => {
      e.classList.remove("active-fieldset");
    });
    document
      .getElementById(`fieldset${this.getAttribute("data-step-num")}`)
      .classList.add("active-fieldset");
  } else {
    Swal.fire({
      icon: "error",
      title: "الرجاء إدخال البيانات بشكل صحيح",
      confirmButtonText: "إغلاق",
    });
  }
});

// fieldset5

let v_5_1 = false;
let v_5_2 = false;
let v_5_3 = false;
let v_5_4 = false;
let v_5_5 = false;

const fieldset5Select = document.querySelectorAll("#fieldset5 select");
const arrayFieldset5Select = Array.from(fieldset5Select);
const paid = document.getElementById("paid");

document.getElementById("unit-number").onblur = function () {
  if (this.value == "") {
    v_5_5 = false;
    this.nextElementSibling.classList.remove("d-none");
  } else {
    v_5_5 = true;
    this.nextElementSibling.classList.add("d-none");
  }
};

const fieldset5Input = document.querySelectorAll(".fieldset5-number");
const fieldset5InputArray = Array.from(fieldset5Input);
paid.onkeyup = function () {
  if (this.value < 3000) {
    this.nextElementSibling.classList.remove("d-none");
    v_5_1 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_5_1 = true;
  }
};

fieldset5Select.forEach((select5) => {
  select5.onchange = function () {
    if (this.value == this.firstElementChild.value) {
      this.nextElementSibling.classList.remove("d-none");
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  };
});

fieldset5Input.forEach((ele) => {
  ele.onblur = function () {
    if (this.value == "") {
      this.nextElementSibling.classList.remove("d-none");
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  };
});

// Check date
document.querySelector(".fieldset5-vali-date").onclick = function () {
  this.type = "date";
  this.showPicker();
};
document.querySelector(".fieldset5-vali-date").onblur = function () {
  if (this.value == "") {
    this.nextElementSibling.classList.remove("d-none");
    this.type = "text";
    v_5_3 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_5_3 = true;
  }
};

fieldset5Input.forEach((ele) => {
  ele.onkeydown = function (e) {
    if (this.value.length >= 2) {
      if (e.key != "Backspace") e.preventDefault();
    }
  };
});

nextElement[4].addEventListener("click", function () {
  for (let i = 0; i < fieldset5InputArray.length; i++) {
    if (fieldset5InputArray[i].value == "") {
      v_5_2 = false;
      break;
    } else {
      v_5_2 = true;
    }
  }
  for (let i = 0; i < arrayFieldset4Select.length; i++) {
    if (
      arrayFieldset4Select[i].value ==
      arrayFieldset4Select[i].firstElementChild.value
    ) {
      v_5_4 = false;
      break;
    } else {
      v_5_4 = true;
    }
  }
  const validateStatus5 = v_5_1 + v_5_2 + v_5_3 + v_5_4 + v_5_5;
  if (validateStatus5 == 5) {
    fieldSets.forEach((e) => {
      e.classList.remove("active-fieldset");
    });
    document
      .getElementById(`fieldset${this.getAttribute("data-step-num")}`)
      .classList.add("active-fieldset");
  } else {
    Swal.fire({
      icon: "error",
      title: "الرجاء إدخال البيانات بشكل صحيح",
      confirmButtonText: "إغلاق",
    });
  }
});

// FieldSet6
let v_6_1 = false;
let v_6_2 = false;
let v_6_3 = false;

const fieldset6Select = document.querySelector("#fieldset6 select");
const fieldset6Input = document.querySelectorAll(".fieldset6-number");
const fieldset6InputArray = Array.from(fieldset6Input);
const city = document.getElementById("city");

city.onblur = function () {
  if (this.value == "") {
    this.nextElementSibling.classList.remove("d-none");
    v_6_1 = false;
  } else {
    this.nextElementSibling.classList.add("d-none");
    v_6_1 = true;
  }
};

fieldset6Select.onchange = function () {
  if (this.value == this.firstElementChild.value) {
    this.nextElementSibling.classList.remove("d-none");
    v_6_2 = false;
  } else {
    v_6_2 = true;
    this.nextElementSibling.classList.add("d-none");
  }
};

fieldset6Input.forEach((ele) => {
  ele.onblur = function () {
    if (this.value == "") {
      this.nextElementSibling.classList.remove("d-none");
    } else {
      this.nextElementSibling.classList.add("d-none");
    }
  };
});

fieldset6Input.forEach((ele) => {
  ele.onkeydown = function (e) {
    if (this.value.length >= 5) {
      if (e.key != "Backspace") e.preventDefault();
    }
  };
});

document.querySelector(".submit-form").addEventListener("click", function () {
  for (let i = 0; i < fieldset6InputArray.length; i++) {
    if (fieldset6InputArray[i].value == "") {
      v_6_3 = false;
      break;
    } else {
      v_6_3 = true;
    }
  }
  const validateStatus6 = v_6_1 + v_6_2 + v_6_3;
  if (validateStatus6 == 3) {
    document.querySelector("#main-form").submit();
  } else {
    Swal.fire({
      icon: "error",
      title: "الرجاء إدخال البيانات بشكل صحيح",
      confirmButtonText: "إغلاق",
    });
  }
});

// prevoius step
const preStep = document.querySelectorAll(".fieldset-prev-btn");
preStep.forEach((pre) => {
  pre.onclick = function () {
    fieldSets.forEach((e) => {
      e.classList.remove("active-fieldset");
    });
    document
      .getElementById(`fieldset${+this.getAttribute("data-step-num")}`)
      .classList.add("active-fieldset");
  };
});
