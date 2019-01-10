<template>
  <div class="loginBg">
    <div class="login--container">
      <header class="login--logoHeader">
        <img src="../../assets/images/LOGO2.png"
             alt>
      </header>
      <div class="login--content">
        <div class="login--mainImg"></div>
        <div class="login--inputPanel">
          <header>zCloud DBaaS 管理平台</header>

          <div class="login--warnTxt animated"
               :class="{'bounce':warnMessageShow}"
               v-show="warnMessageShow">
            <i class="icon iconfont icon-cuowucha"></i>&nbsp;&nbsp;
            <span>{{warnMessage}}</span>
          </div>
          <el-form :model="loginForm"
                   :rules="loginRule"
                   ref="loginForm"
                   label-position="left"
                   label-width="0px"
                   class="demo-ruleForm login-container animated"
                   :class="{'top7':warnMessageShow}">
            <el-form-item prop="tenementname">
              <i class="icon iconfont icon-zhanghao"></i>

              <el-select v-model="loginForm.tenementname"
                         placeholder="请输入租户名称">
                <el-option v-for="item in tenementnameList"
                           :key="item.tenementName"
                           :label="item.tenementChinName || item.tenementName"
                           :value="item.tenementName"></el-option>
              </el-select>
              <!--<el-input type="text" autofocus v-model.trim="loginForm.tenementname" @keyup.enter.native="handleSubmit"-->
              <!--placeholder="请输入租户名称"></el-input>-->
            </el-form-item>
            <el-form-item prop="username">
              <i class="icon iconfont icon-zhanghao"></i>
              <el-input type="text"
                        v-model.trim="loginForm.username"
                        @keyup.enter.native="handleSubmit"
                        placeholder="请输入用户名称"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <i class="icon iconfont icon-mima"></i>
              <el-input type="password"
                        v-model.trim="loginForm.password"
                        @keyup.enter.native="handleSubmit"
                        placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="password"
                          class="login_pwdStatus">
              <el-checkbox v-model="checked"
                           checked
                           class="remember loginTxt em-checkBox">记住密码
              </el-checkbox>
              <span class="floatRight loginTxt">
                <a>忘记密码？</a>
              </span>
            </el-form-item>

            <el-form-item class="login_pwdStatus login_btn">
              <el-button :disabled="buttonDisable"
                         class="loginBtn"
                         @keyup.enter.native="handleSubmit"
                         @click.native.prevent="handleSubmit"
                         :loading="loginLoading">登&nbsp;录
              </el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <div class="login--version">
      <div class="login--versionTxt">Yunhe Enmo (Beijing) Information Technology Co., Ltd. / Copyright © 2009-2016
        enmotech.com, All rights reserved.
      </div>
    </div>
  </div>
</template>

<style lang="less">
@import "./index.less";
</style>
<script>
// import $apis from "backendApi";
// import { $util } from "helper";
// import $config from "config";
// let CryptoJS = require("crypto-js/crypto-js");

// const routersArr = [];
export default {
  data() {
    return {
      buttonDisable: false,
      loginForm: {
        system: '',
        username: '',
        password: '',
        tenementname: ''
      },
      warnMessage: '',
      warnMessageShow: false,
      systemOption: [
        { label: 'oracle', value: 'oracle' },
        { label: 'mySql', value: 'mySql' }
      ],
      tenementnameList: [],
      loginLoading: false,
      loginRule: {
        //          username: [
        //            {required: true, message: '请输入账号', trigger: 'blur'},
        //          ],
        //          password: [
        //            {required: true, message: '请输入密码', trigger: 'blur'},
        //          ],
        //          tenementname: [
        //            {required: true, message: '请输入租户', trigger: 'blur'}
        //          ]
      },
      checked: true,
      allMenus: [],
      allBtns: {}
    };
  },
  mounted() {
    // this.getAllTenantList();
    // this.getCookie();
  },
  methods: {
    getAllTenantList() {
      // let _this = this;
      // $apis.managementUser.getAllTenementList().then(res => {
      //   if (res.data.suc) {
      //     _this.tenementnameList = res.data.obj;
      //   } else {
      //     _this.$notify({
      //       title: "警告",
      //       message: msg,
      //       type: "warning"
      //     });
      //   }
      // });
    },
    //设置cookie
    setCookie() {
      // let exdate = new Date(); //获取时间
      // exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
      // //字符串拼接cookie
      // window.document.cookie =
      //   "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
      // window.document.cookie =
      //   "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
      // window.document.cookie =
      //   "tenant" + "=" + c_tenant + ";path=/;expires=" + exdate.toGMTString();
    },
    //读取cookie
    getCookie() {
      // if (document.cookie.length > 0) {
      //   let arr = document.cookie.split("; ");
      //   for (let i = 0; i < arr.length; i++) {
      //     let arr2 = arr[i].split("=");
      //     if (arr2[0] == "userName") {
      //       this.loginForm.username = arr2[1];
      //     } else if (arr2[0] == "userPwd") {
      //       this.loginForm.password = $util.decryptedFun(CryptoJS, arr2[1]);
      //     } else if (arr2[0] == "tenant") {
      //       this.loginForm.tenementname = arr2[1];
      //     }
      //   }
      // }
    },
    clearCookie() {
      this.setCookie('', '', '', -1); //修改2值都为空，天数为负1天就好了
    },

    handleReset2() {
      this.$refs.ruleForm2.resetFields();
    },
    changeMenu() {
      // let _this = this;
      // childArr.forEach(item => {
      //   let menu = Object.assign({}, item);
      //   if (menu.resourceUrl) {
      //     menu.name = item.permissionsName;
      //     menu.path = item.resourceUrl;
      //     if (menu.typeId != 2 && menu.typeId != 3) {
      //       if (item.childs) {
      //         if (item.childs.length != 0) {
      //           menu.children = [];
      //           _this.changeMenu(menu.children, item.childs);
      //           menusArr.push({
      //             name: menu.name,
      //             path: menu.path,
      //             children: menu.children,
      //             component: menu.component,
      //             classify: menu.classify,
      //             redirect: menu.redirect,
      //             meta: JSON.parse(menu.other),
      //             icon: menu.icon,
      //             hidden: menu.hidden
      //           });
      //         } else {
      //           menusArr.push({
      //             name: menu.name,
      //             path: menu.path,
      //             redirect: menu.redirect,
      //             component: menu.component,
      //             classify: menu.classify,
      //             meta: JSON.parse(menu.other),
      //             icon: menu.icon,
      //             hidden: menu.hidden
      //           });
      //         }
      //       }
      //     } else {
      //       if (_this.allBtns[menu.alias] == undefined) {
      //         _this.allBtns[menu.alias] = [];
      //       }
      //       if (menu.hidden == 0) {
      //         _this.allBtns[menu.alias].push({
      //           name: menu.permissionsName,
      //           action: menu.action,
      //           typeId: menu.typeId,
      //           meta: menu.other == "" ? {} : JSON.parse(menu.other)
      //         });
      //       }
      //       if (menu.childs) {
      //         if (menu.childs.length != 0) {
      //           menu.children = [];
      //           _this.changeMenu(menu.children, menu.childs);
      //           _.each(menu.children, function(k) {
      //             menusArr.push(k);
      //           });
      //         } else {
      //           menusArr.push({
      //             name: menu.name,
      //             path: menu.path,
      //             redirect: menu.redirect,
      //             component: menu.component,
      //             classify: menu.classify,
      //             meta: JSON.parse(menu.other),
      //             icon: menu.icon,
      //             hidden: menu.hidden
      //           });
      //         }
      //       } else {
      //         menusArr.push({
      //           name: menu.name,
      //           path: menu.path,
      //           redirect: menu.redirect,
      //           component: menu.component,
      //           classify: menu.classify,
      //           meta: JSON.parse(menu.other),
      //           icon: menu.icon,
      //           hidden: menu.hidden
      //         });
      //       }
      //     }
      //   } else if (!menu.resourceUrl && menu.hidden == 0) {
      //     if (_this.allBtns[menu.alias] == undefined) {
      //       _this.allBtns[menu.alias] = [];
      //     }
      //     if (menu.hidden == 0) {
      //       _this.allBtns[menu.alias].push({
      //         name: menu.permissionsName,
      //         action: menu.action,
      //         typeId: menu.typeId,
      //         meta: menu.other == "" ? {} : JSON.parse(menu.other),
      //         disabledCondition: menu.redirect //暂时放disable条件
      //       });
      //     }
      //   }
      // });
    },
    handleSubmit() {
      // let _this = this,
      //   param = "";
      // if (_this.loginForm.tenementname == "") {
      //   _this.warnMessageShow = true;
      //   _this.warnMessage = "请输入租户名称";
      //   return false;
      // }
      // if (_this.loginForm.username == "") {
      //   _this.warnMessageShow = true;
      //   _this.warnMessage = "请输入用户名";
      //   return false;
      // }
      // if (_this.loginForm.password == "") {
      //   _this.warnMessageShow = true;
      //   _this.warnMessage = "请输入密码";
      //   return false;
      // }
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     this.buttonDisable = true;
      //     let param = "Main";
      //     this.loginLoading = true;
      //     this.warnMessageShow = false;
      //     let loginParams = {
      //       username: _this.loginForm.username,
      //       password: $util.encryptFun(CryptoJS, _this.loginForm.password),
      //       //                            password:_this.loginForm.password,
      //       tenementname: _this.loginForm.tenementname
      //     };
      //     //            debugger;
      //     $apis.common
      //       .login(loginParams)
      //       .then(res => {
      //         if (res.data.errCode == 0) {
      //           //                              sessionStorage.setItem("menus",JSON.stringify($config.router.routesArr))
      //           //                              sessionStorage.setItem("buttonsPermission",JSON.stringify($config.router.buttonsArr))
      //           //                              $util.MenuUtils(routersArr,$config.router.routesArr);
      //           //                              this.$router.addRoutes(routersArr)
      //           //                              this.$router.push({path: '/sp/introduction/devOutline'});
      //           if (res.data.content.systemOwner == "HFBANK") {
      //             param = "HF";
      //           } else {
      //             param = "Main";
      //           }
      //           //                              document.getElementById('bodyApp').className ='theme'+param;
      //           //                              localStorage.setItem('outLook','theme'+param);
      //           //  存user
      //           const { userInfo } = res.data.content;
      //           const { roleIds } = userInfo;
      //           let user = _.cloneDeep(userInfo);
      //           user.roleType = roleIds.includes("25")
      //             ? "sp"
      //             : roleIds.includes("15")
      //             ? "dba"
      //             : "0";
      //           localStorage.setItem("user", JSON.stringify(user));
      //           _this.changeMenu(
      //             _this.allMenus,
      //             res.data.content.userInfo.sysPermissionList
      //           );
      //           localStorage.setItem("menus", JSON.stringify(_this.allMenus));
      //           localStorage.setItem("buttons", JSON.stringify(_this.allBtns));
      //           $util.MenuUtils(routersArr, _this.allMenus);
      //           _this.$router.addRoutes(routersArr);
      //           _this.$router.push({ path: routersArr[0].redirect });
      //           _this.loginLoading = false;
      //           if (_this.checked) {
      //             //传入账号名，密码，和保存天数3个参数
      //             _this.setCookie(
      //               _this.loginForm.username,
      //               $util.encryptFun(CryptoJS, _this.loginForm.password),
      //               _this.loginForm.tenementname,
      //               7
      //             );
      //           } else {
      //             _this.clearCookie();
      //           }
      //           //                              _this.buttonDisable=false;
      //         } else {
      //           _this.warnMessageShow = true;
      //           _this.warnMessage = res.data.errMsg;
      //           //                _this.$message.error(res.data.errMsg);
      //           //                              _this.$router.push({path: $config.common.url.page500,query:{message:res.data.errMsg}});
      //           _this.loginLoading = false;
      //           _this.buttonDisable = false;
      //         }
      //       })
      //       .catch(error => {
      //         _this.loginLoading = false;
      //         _this.buttonDisable = false;
      //       });
      //   } else {
      //     return false;
      //   }
      // });
    }
  }
};
</script>
