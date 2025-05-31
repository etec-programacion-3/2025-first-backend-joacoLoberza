   // Configuración de la API
   const baseUrl = 'http://localhost:3000/libros';
   const tabla = document.querySelector('#book-table tbody');
   const form = document.getElementById('form-libro');
   const inputNombre = document.getElementById('name');
   const inputAutor = document.getElementById('author');
   const inputCategoria = document.getElementById('category');
   const inputIsbn = document.getElementById("isbn")
   const btnCancelar = document.getElementById('x-button');
   const mensaje = document.getElementById('mensaje');
   let editId = null;

   // Mostrar mensaje de éxito o error
   function mostrarMensaje(texto) {
       mensaje.innerHTML = `<div>${texto}</div>`;
       setTimeout(() => mensaje.innerHTML = '', 2500);
   }

   // Obtener todos los productos
   async function cargarLibros() {
       console.log("Cargando...")
       tabla.innerHTML = '<tr><td colspan="7">Cargando...</td></tr>';
       try {
           const res = await fetch(`${baseUrl}?order=asc`);
           const libros = await res.json();
           tabla.innerHTML = '';
           libros.forEach(libro => {
               const tr = document.createElement('tr');
               tr.innerHTML = `
                   <td>${libro.id}</td>
                   <td>${libro.name}</td>
                   <td>${libro.author}</td>
                   <td>${libro.category}</td>
                   <td>${libro.isbn}</td>
                   <td>${libro.state}</td>                   
               `;
               tabla.appendChild(tr);
           });
       } catch (err) {
           tabla.innerHTML = '<tr><td colspan="7">Error al cargar productos</td></tr>';
       }
   }

   // Crear o actualizar producto
   form.onsubmit = async function(e) {
       e.preventDefault();
       const libro = {
           title: inputNombre.value.replace(/\s+/g, ''),
           author: inputAutor.value.replace(/\s+/g, ''),
           category: inputCategoria.value.replace(/\s+/g, ''),
           isbn: parseInt(inputIsbn.value),
       };
       try {
           let res;
           if (editId) {
               // Actualizar
               res = await fetch(`${baseUrl}/${editId}`, {
                   method: 'PUT',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify(libro)
               });
               mostrarMensaje('Producto actualizado');
           } else {
               // Crear
               res = await fetch(`${baseUrl}`, {
                   method: 'POST',
                   headers: { 'Content-Type': 'application/json' },
                   body: JSON.stringify(libro)
               });
               mostrarMensaje('Producto agregado');
           }
           if (!res.ok) throw new Error('Error en la petición');
           form.reset();
           editId = null;
           cargarLibros();
       } catch (err) {
           mostrarMensaje('Error al guardar producto', 'danger');
       }
   };

   // Editar producto (rellena el formulario)
   window.editarProducto = function(id, nombre, precio, descripcion) {
       editId = id;
       inputNombre.value = nombre;
       inputPrecio.value = precio;
       inputDescripcion.value = descripcion;
       btnCancelar.classList.remove('d-none');
   };

   // Cancelar edición
   btnCancelar.onclick = function() {
       editId = null;
       form.reset();
       btnCancelar.classList.add('d-none');
   };

   // Eliminar producto
   window.eliminarProducto = async function(id) {
       if (!confirm('¿Seguro que deseas eliminar este producto?')) return;
       try {
           const res = await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
           if (!res.ok) throw new Error('Error al eliminar');
           mostrarMensaje('Producto eliminado');
           cargarLibros();
       } catch (err) {
           mostrarMensaje('Error al eliminar producto', 'danger');
       }
   };

   // Cargar productos al iniciar
   cargarLibros();