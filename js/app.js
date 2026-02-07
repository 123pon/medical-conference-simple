async function register() {
  const emailVal = document.getElementById('email').value
  const passwordVal = document.getElementById('password').value

  const { data, error } = await supabaseClient.auth.signUp({
    email: emailVal,
    password: passwordVal
  })

  if (error) {
    alert('注册失败：' + error.message)
  } else {
    alert('注册成功，请登录')
  }
}

async function login() {
  const emailVal = document.getElementById('email').value
  const passwordVal = document.getElementById('password').value

  const { data, error } = await supabaseClient.auth.signInWithPassword({
    email: emailVal,
    password: passwordVal
  })

  if (error) {
    alert('登录失败：' + error.message)
  } else {
    alert('登录成功！')
  }
}

async function logout() {
  await supabaseClient.auth.signOut()
  alert('已退出登录')
}
