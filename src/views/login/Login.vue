<template>
  <div class="login-container">
    <main>
      <div class="auth-form px-3">
        <div class="auth-form-header">
          <h1>Sign in to WX-hot</h1>
          <div class="auth-form-body">
            <a-form :model="formState" layout="vertical">
              <a-form-item label="Input your username lsp" :="validateInfos.userName">
                <a-input style="border-radius: 6px" v-model:value="formState.userName"/>
              </a-form-item>
              <a-form-item label="Password" :="validateInfos.psw">
                <a-input-password style="border-radius: 6px" v-model:value="formState.psw"/>
              </a-form-item>
            </a-form>
            <a-button :loading="loading" @click="onSubmit" class="sign-in-button" type="primary">Sign in</a-button>
          </div>
          <p class="login-callout">
            Forgot password?
            <a>Call lsp John</a>
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import {defineComponent, reactive, ref, toRaw, UnwrapRef} from "vue";
import {Form} from "ant-design-vue";
import {login} from "../../services/authService";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const formState: UnwrapRef<{ userName: string, psw: string }> = reactive({
      userName: '',
      psw: '',
    });
    const router = useRouter();
    const rulesRef = reactive({
      userName: [
        {
          required: true,
          message: '☝️input you fuck name！',
        },
      ],
      psw: [
        {
          required: true,
          message: '☝️input you fuck password！',
        },
      ],
    });

    const {validate, validateInfos} = Form.useForm(formState, rulesRef);

    const loading = ref<Boolean>(false);

    const onSubmit = () => {
      validate().then(() => {
        loading.value = true
        login(toRaw(formState))
        .then(res => {
         res.token && router.push('/porn')
        })
        .finally(() => {
          loading.value = false
        })
      })
    }
    return {
      formState,
      loading,
      onSubmit,
      validateInfos,
    }
  }
})
</script>

<style lang="less">

.login-container{
  margin-top: 10%;
}
.auth-form {
  width: 340px;
  margin: 0 auto;
}

.px-3 {
  padding-right: 16px !important;
  padding-left: 16px !important;
}

.auth-form-header {
  margin-bottom: 15px;
  text-align: center;
  text-shadow: none;
  background-color: transparent;
  border: 0;

  h1 {
    font-size: 24px;
    font-weight: 300;
    letter-spacing: -0.5px;
  }
}

.sign-in-button {
  display: block;
  width: 100%;
  text-align: center;
  border-radius: 6px;
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  vertical-align: middle;
}

.auth-form-body {
  padding: 20px;
  font-size: 14px;
  background-color: #f6f8fa;
  border: 1px solid hsla(210 18% 87% 1);
  border-top: 0;
  border-radius: 0 0 6px 6px;

  .ant-form-item-required::before {
    content: none !important;
  }
}

.login-callout {
  margin-top: 16px !important;
  padding: 15px 20px;
  text-align: center;
  border: 1px solid #d0d7de;
  border-radius: 6px;
}
</style>