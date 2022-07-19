export function campoRequerido(input)
{
    if (input.value.trim().length > 0)
    {
        input.className = 'form-control is-valid' 
    }
    else
    {
        input.className = 'form-control is-invalid' 
    }
}

export function cantidadCaracteres(input, min, max)
{
    let text = input.value.trim();
    if (text.length >= min && text.length <= max )
    {
        input.className = 'form-control is-valid';
    }
    else
    {
        input.className = 'form-control is-invalid';
    }
}

export function validarUrl(input) {
    let patron = /^(http|https|ftp)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
    if (patron.test(input.value.trim())) {
      input.className = "form-control is-valid";
      return true;
    } else {
      input.className = "form-control is-invalid";
      return false;
    }
  }