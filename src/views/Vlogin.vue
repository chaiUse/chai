<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
// import {ref,watch,onMounted} from 'vue'
import { RouterView ,useRoute,useRouter,RouterLink} from 'vue-router';
import {useCounterStore} from '@/stores/counter';
console.log(useRoute(),useRouter());
const router=useRouter()
const route=useRoute()
const stores =useCounterStore()

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'admin',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  pass:[

  ]
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      if(ruleForm.name=='admin'&&ruleForm.pass==123){
        console.log(ruleForm.name,ruleForm.pass);
        
  const token ='666'
  localStorage.setItem('token',token)
        console.log('submit!')
      router.push('/home')
      }
      

    } else {
      console.log('error submit!', fields)
    }
  })
}

</script>
<template>
  <div class="Vlogin">
    <el-form ref="ruleFormRef" style="max-width: 600px" :model="ruleForm" :rules="rules" label-width="auto"
      class="demo-ruleForm" :size="formSize" status-icon>

      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name" />
      </el-form-item>
      
        <el-form-item label="密码" prop="pass" >
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <!-- <el-form-item label="确认密码" prop="checkPass">
          <el-input v-model="ruleForm.checkPass" type="password" autocomplete="off" />
        </el-form-item> -->
      <el-form-item >
        <el-button type="primary" @click="submitForm(ruleFormRef)" label-width="500px" size="large" >
          登陆
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<style lang="scss">
.Vlogin {
  width: 500px;
  height: 300px;
  background: #ffffff;
  color: red;
  padding: 10px;
  text-align: center;
}
</style>