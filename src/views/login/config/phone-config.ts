// 检验规则
export const rules = {
  number: [
    { required: true, message: '必须填写手机号', trigger: 'blur' },
    { pattern: /^((\+|00)86)?1\d{10}$/, message: '填写11位手机号', trigger: 'blur' }
  ],
  code: [
    { required: true, message: '必须填写验证码', trigger: 'blur' },
    { pattern: /^[0-9]{6,6}$/, message: '填写6位数验证码', trigger: 'blur' }
  ]
}
