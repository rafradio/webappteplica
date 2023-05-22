import {formAction} from "./FormForCall.js";

class WebSiteAnimation {
    constructor() {
        this.reqButtons = document.querySelectorAll('.button-consult-call');
        this.regForm = document.querySelector('.request_modal_wrap');
        this.closeBtn = document.querySelector('.close_btn');
        this.cityGeo = document.querySelector('.city-geo');
        this.phone = document.querySelector('.phone-digits');
        this.cityList = document.querySelector('.data_city_phone');
        this.cityChange = document.querySelectorAll(".data_cities");
        this.phoneChange = document.querySelectorAll(".data_phones");
    }

    initSettings() {

        this.reqButtons.forEach((item, index) => {
            item.addEventListener('click', () => {
                this.regForm.classList.add("request_modal_wrap_on");
            });
        });

        // this.reqButton.addEventListener('click', () => {
        //     this.regForm.classList.add("request_modal_wrap_on");
        // });
    
        this.closeBtn.addEventListener('click', () => {this.regForm.classList.remove("request_modal_wrap_on");});
        this.cityGeo.addEventListener('click', () => this.cityMenu());

        this.cityChange.forEach((item, index) => {
            console.log("Hello world");
            item.addEventListener('click', () => this.changeCityPhone(item, index));
        })
    }

    cityMenu() {
        this.cityList.classList.add("data_block_on");
        this.cityList.addEventListener("mouseleave", () => {this.cityList.classList.remove("data_block_on")});
    }

    changeCityPhone(item, index) {
        let city = document.querySelector('.city-name');
        city.innerHTML = item.textContent;
        this.phone.innerHTML = this.phoneChange[index].textContent;
        this.cityList.classList.remove("data_block_on");
    }
}

const myAnimation = new WebSiteAnimation();
myAnimation.initSettings();
formAction.initSettings();