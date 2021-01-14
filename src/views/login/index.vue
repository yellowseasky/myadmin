<template>
  <div class='login-container'>
    <a-form
      id="components-form-demo-normal-login"
      :form="form"
      class="login-form my-form"
      @submit="handleSubmit"
    >
    <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: '请输入你的用户名!' }] },
        ]"
        placeholder="请输入用户名"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入你的密码!' }] },
        ]"
        type="password"
        placeholder="请输入你的密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-checkbox
        v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: false,
          },
        ]"
      >
        记住我的密码
      </a-checkbox>
      <a class="login-form-forgot my-form-forgot" href="" >
        忘记密码
      </a>
      <a-button type="primary" html-type="submit" class="login-form-button my-form-button">
        登录
      </a-button>
      或
      <a href="">
        现在注册!
      </a>
    </a-form-item>
  </a-form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {

    }
  },
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'normal_login' })
  },
  methods: {
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          if (values.userName !== 'hht' && values.password !== '123') {
            this.$message.warning('用户名错误或密码错误!')
          } else {
            this.$message.success('登录成功!', 1, () => {
              // this.$router.push('/')
              this.$router.replace('/home')
            })
          }
        }
      })
    }
  },
  created () {
    // document.title = `天倬智能装备 - ${this.$route.meta.title}`
  }
}
</script>

<style scoped lang='less'>
  .login-container{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url("./login_bg.jpg") no-repeat;
    background-size: cover;
    .my-form{

      background-color: #fff;
      padding: 20px;
      box-shadow: 1px 1px 5px rgb(41, 41, 41);
      .my-form-forgot{
        float: right;
      }
    }

  .my-form-button{
    width:100%;
  }
  }
</style>
