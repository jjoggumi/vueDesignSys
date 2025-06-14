"use strict";

import Vue from "vue";
import swal from 'sweetalert2'
import '@/assets/scss/sweetalert2.css'

/**
 * C,R,U,D,Search 가 모두 포함된 api
 * @type {string[]}
 */

const _hiClass = {
  /**
   * ///////////////////////////////////////////////////////////////
   * // _hiClass custom APIs
   * ///////////////////////////////////////////////////////////////
   */



  ///////////////////////////////////////////////////////////////
  // Alert
  ///////////////////////////////////////////////////////////////
  swalOptions(text, icon) {
    const customClass = 'swal2-custom-class'

    return {
      html: text,
      icon: icon,
      buttonsStyling: true,
      /**
       * https://sweetalert2.github.io/#configuration
       *
       * customClass: {
          container: '...',
          popup: '...',
          header: '...',
          title: '...',
          closeButton: '...',
          icon: '...',
          image: '...',
          content: '...',
          htmlContainer: '...',
          input: '...',
          inputLabel: '...',
          validationMessage: '...',
          actions: '...',
          confirmButton: '...',
          denyButton: '...',
          cancelButton: '...',
          loader: '...',
          footer: '....'
        }
       */
      customClass: {
        popup: customClass,
        container: customClass,
        actions: customClass,
        confirmButton: customClass,
        cancelButton: customClass,
        denyButton: customClass,
      }
    };
  },

  confirm(text, icon, opts) {
    return new Promise((resolve, reject) => {
      let options = this.swalOptions(text, icon);
      options.showCancelButton = true
      options.showDenyButton = false
      options.showConfirmButton = true
      options.confirmButtonText = "확인"
      options.denyButtonText = "거절"
      options.cancelButtonText = "취소"
      options.reverseButtons = false

      if (opts && Object.keys(opts).length > 0) {
        for (const [key, value] of Object.entries(opts))
          options[key] = value
      }

      swal.fire(options)
        .then(result => result.isDismissed ? reject(result) : resolve(result))
    })
  },

  confirmCustom(text, confirmButtonText, cancelButtonText, icon, opts) {
    return new Promise((resolve, reject) => {
      let options = this.swalOptions(text, icon);
      options.showCancelButton = true
      options.showDenyButton = false
      options.showConfirmButton = true
      options.confirmButtonText = confirmButtonText ? confirmButtonText : "확인"
      options.denyButtonText = "거절"
      options.cancelButtonText = cancelButtonText ? cancelButtonText : "취소"
      options.reverseButtons = true

      if (opts && Object.keys(opts).length > 0) {
        for (const [key, value] of Object.entries(opts))
          options[key] = value
      }

      swal.fire(options)
        .then(result => resolve(result))
    })
  },

  /**
   * sweet alert 2
   * @param text
   * @param icon
   * @param autoClose
   * @return {Promise<unknown>}
   */
  alert(text, icon, autoClose) {
    // return new Promise((resolve, reject) => {
    return new Promise((resolve) => {
      let options = this.swalOptions(text, icon);
      if (autoClose === true) {
        options.showCancelButton = false;
        options.showConfirmButton = false;
        options.timer = 1200;
      } else {
        options.showCancelButton = false;
        options.showConfirmButton = true;
        options.confirmButtonText = "확인";
      }

      swal.fire(options).then(result => {
        // if (result.value == true) {
        //   resolve(result);
        // } else {
        //   reject(result);
        // }
        resolve(result);
      });
    });
  },

  confirmDelete() {
    return this.confirm("삭제 하시겠습니까?", "warning");
  },
  confirmUpdate() {
    return this.confirm("적용 하시겠습니까?", "warning");
  },
  alertCreate() {
    return this.alert("저장 되었습니다.", "success", true);
  },
  alertUpdate() {
    return this.alert("수정 되었습니다.", "success", true);
  },
  alertDelete() {
    return this.alert("삭제 되었습니다.", "success", true);
  },
  alertError() {
    return this.alert(
      "서버와의 통신이 지연되고 있습니다.<br/>잠시후 다시 시도 하여 주십시오.",
      "error"
    );
  },
  alertSearch() {
    return this.alert("검색어를 입력해주세요", "error", false);
  },

}


const HiClass = {};
HiClass.install = function (Vue) {
  Vue.hiClass = _hiClass;
  window.hiClass = _hiClass;
  Object.defineProperties(Vue.prototype, {
    hiClass: {
      get() {
        return _hiClass;
      }
    },
    $hiClass: {
      get() {
        return _hiClass;
      }
    },
  });
};

Vue.use(HiClass)


export default HiClass;
