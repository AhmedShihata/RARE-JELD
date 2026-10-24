// fetch('https://6ad4af3348476c0785d93108.mockapi.io/prodect').then((res)=>{
//     return res.json()
// })
// .then((data)=>{
//     console.log(data)

//      let pro=document.getElementById("parent2")
//      pro.className="parent"

//     pro.innerHTML = ""

// for(let i=0;i<data.length;i++){

//     let parent=document.createElement("div")
//     parent.className="par"
//     let img=document.createElement("img")
//     img.setAttribute("src",data[i].image)
//     img.className="img"
//     let head=document.createElement("h2")
//     head.textContent=data[i].title
//     head.className="tit"
//     let des=document.createElement("p")
//     des.textContent=data[i].description
//     des.className="desc"
//     let foter=document.createElement("div")
//     foter.className="foter"
//     let text=document.createElement("p")
//     text.textContent=data[i].price + "EGP"
//     text.className="price"
//     let but= document.createElement("button")
//     but.textContent="Buy"
//     but.className="but"
    
//     parent.appendChild(img)
//     parent.appendChild(head)
//     parent.appendChild(des)
//     parent.appendChild(foter)
//     foter.appendChild(text)
//     foter.appendChild(but)
//     pro.appendChild(parent)
// }
// })
// // ############################################
// // اظهارواخفاء قائمة الناف بار عند التليفون
//         document.addEventListener('DOMContentLoaded', function () {
//             let togglerBtn = document.getElementById('navbarTogglerBtn')
//             let navbarNav = document.getElementById('navbarNav')
//             if (togglerBtn && navbarNav) {
//                 togglerBtn.addEventListener('click', function() {
//                     navbarNav.classList.toggle('show')
//                 })
//             }


//             // 2. إظهار وإخفاء مربع البحث وإغلاقه عند الضغط خارجه
//             let searchIcon = document.getElementById('searchIcon');
//             let searchBoxContainer = document.getElementById('searchBoxContainer');
//             let searchInput = document.getElementById('searchInput');

//             if (searchIcon && searchBoxContainer) {
//                 searchIcon.addEventListener('click', function (e) {
//                     e.preventDefault();
//                     e.stopPropagation();
//                     searchBoxContainer.classList.toggle('d-none');
//                     if (!searchBoxContainer.classList.contains('d-none')) {
//                         searchInput.focus();
//                     }
//                 });

//                 searchBoxContainer.addEventListener('click', function (e) {
//                     e.stopPropagation();
//                 });
//             }

//             document.addEventListener('click', function () {
//                 if (searchBoxContainer && !searchBoxContainer.classList.contains('d-none')) {
//                     searchBoxContainer.classList.add('d-none');
//                 }
//             });

//             // 3. نظام السلة (Shopping Cart Logic)
//             let cart = [];
//             let cartContainer = document.querySelector('.cart-items');
//             let cartTotalElement = document.getElementById('cart-total');
//             let cartCountElement = document.getElementById('cart-count');

//             // Event Delegation لأزرار الشراء (حتى المضافة ديناميكياً عبر الـ Fetch)
//     //         document.body.addEventListener('click', function (e) {
//     //             if (e.target && e.target.classList.contains('butbuy')) {
//     //                 e.preventDefault();

//     //                 if (but) {
//     //      but.addEventListener("click",function(e){
//     //     e.preventDefault()
//     //     let islog=localStorage.getItem("islog")
//     //     if (islog==="true") {
//     //         window.location.href="shoppingCartOffcanvas"
//     //     } else {
//     //         alert("You must log in or create an account first to complete the purchase.") 
//     //         window.location.href="./login.html"
//     //     }
//     // })  
//     // }


//     //                 let button = e.target;
//     //                 let name = button.getAttribute('data-name');
//     //                 let price = parseFloat(button.getAttribute('data-price'));
//     //                 let img = button.getAttribute('data-img');

//     //                 let existingItem = cart.find(item => item.name === name);
//     //                 if (existingItem) {
//     //                     existingItem.quantity += 1;
//     //                 } else {
//     //                     cart.push({ name, price, img, quantity: 1 });
//     //                 }

//     //                 updateCartUI();

//     // 1. Handle adding items to the cart via event delegation
// document.body.addEventListener('click', function (e) {
//     let button = e.target.closest('.butbuy'); // .closest() ensures it works even if they click a child element (like an icon inside the button)
    
//     if (button) {
//         e.preventDefault();

//         let name = button.getAttribute('data-name');
//         let price = parseFloat(button.getAttribute('data-price'));
//         let img = button.getAttribute('data-img');

//         // Ensure cart is initialized
//         if (typeof cart === 'undefined') {
//             window.cart = [];
//         }

//         let existingItem = cart.find(item => item.name === name);
//         if (existingItem) {
//             existingItem.quantity += 1;
//         } else {
//             cart.push({ name, price, img, quantity: 1 });
//         }

//         // Update UI function (make sure this is defined in your script)
//         if (typeof updateCartUI === 'function') {
//             updateCartUI();
//         }

//         // Show the Bootstrap offcanvas cart
//         let cartOffcanvasEl = document.getElementById('shoppingCartOffcanvas');
//         if (cartOffcanvasEl) {
//             let cartCanvas = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvasEl);
//             cartCanvas.show();
//         }
//     }
// });

// // 2. Handle global checkout/purchase button login check (Attach OUTSIDE the click handler)
// const checkoutButton = document.getElementById('but'); // Replace 'but' with your actual checkout button ID or selector
// if (checkoutButton) {
//     checkoutButton.addEventListener('click', function (e) {
//         e.preventDefault();
//         let islog = localStorage.getItem("islog");
        
//         if (islog === "true") {
//             // If it's a Bootstrap offcanvas or modal, toggle it instead of changing window location, 
//             // unless 'shoppingCartOffcanvas' is a distinct HTML page path.
//             let cartOffcanvasEl = document.getElementById('shoppingCartOffcanvas');
//             if (cartOffcanvasEl) {
//                 let cartCanvas = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvasEl);
//                 cartCanvas.show();
//             } else {
//                 window.location.href = "shoppingCartOffcanvas.html"; // Ensure filename extension if it's a page
//             }
//         } else {
//             alert("You must log in or create an account first to complete the purchase.");
//             window.location.href = "./login.html";
//         }
//     });
// }



//                     let cartOffcanvasEl = document.getElementById('shoppingCartOffcanvas');
//                     if (cartOffcanvasEl) {
//                         let cartCanvas = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvasEl);
//                         cartCanvas.show();
//                     }
//                 }
//             });

//             function updateCartUI() {
//                 if (!cartContainer) return;
//                 cartContainer.innerHTML = '';
//                 let total = 0;
//                 let totalCount = 0;

//                 if (cart.length === 0) {
//                     cartContainer.innerHTML = `<p class="text-center text-white-50 my-4">Your cart is empty.</p>`;
//                     if (cartTotalElement) cartTotalElement.textContent = '0.00 EGP';
//                     if (cartCountElement) cartCountElement.textContent = '0';
//                     return;
//                 }

//                 cart.forEach((item, index) => {
//                     total += item.price * item.quantity;
//                     totalCount += item.quantity;

//                     let cartItemHTML = `
//                         <div class="cart-item d-flex align-items-center justify-content-between border-bottom py-3 text-white">
//                             <div class="d-flex align-items-center">
//                                 <img src="${item.img}" alt="${item.name}" style="width: 70px; height: 60px; object-fit: cover;" class="rounded me-2">
//                                 <div>
//                                     <h6 class="mb-1 fw-bold" style="font-size: 13px;">${item.name}</h6>
//                                     <small class="text-white-50 d-block mb-1">${item.price} EGP</small>
//                                     <div class="input-group input-group-sm" style="width: 100px;">
//                                         <button class="btn btn-outline-light px-2" onclick="changeQuantity(${index}, -1)">-</button>
//                                         <span class="form-control text-center bg-dark text-white border-secondary px-1">${item.quantity}</span>
//                                         <button class="btn btn-outline-light px-2" onclick="changeQuantity(${index}, 1)">+</button>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button class="btn btn-sm btn-outline-danger ms-2 px-2 py-1" onclick="removeFromCart(${index})">
//                                 Cancel
//                             </button>
//                         </div>
//                     `;
//                     cartContainer.innerHTML += cartItemHTML;
//                 });

//                 if (cartTotalElement) cartTotalElement.textContent = `${total.toLocaleString()} EGP`;
//                 if (cartCountElement) cartCountElement.textContent = totalCount;
//             }

//             window.changeQuantity = function (index, amount) {
//                 cart[index].quantity += amount;
//                 if (cart[index].quantity <= 0) {
//                     cart.splice(index, 1);
//                 }
//                 updateCartUI();
//             };

//             window.removeFromCart = function (index) {
//                 cart.splice(index, 1);
//                 updateCartUI();
//             };

//             window.checkCheckout = function () {
//                 if (cart.length === 0) {
//                     alert('Your cart is empty!');
//                     return;
//                 }
//                 alert('Thank you for your purchase! Order placed successfully.');
//                 cart = [];
//                 updateCartUI();

//                 let cartOffcanvasEl = document.getElementById('shoppingCartOffcanvas');
//                 let cartOffcanvas = bootstrap.Offcanvas.getInstance(cartOffcanvasEl);
//                 if (cartOffcanvas) {
//                     cartOffcanvas.hide();
//                 }
//             };

//             updateCartUI();

//             // 4. Fetch Products & Search Engine (بدون تكرار وعرض المنتجات بالكامل أو بالبحث)
//             let allProducts = [];
//             let pro = document.getElementById("parent2");

//             function renderProducts(productsList) {
//                 if (!pro) return;
//                 pro.innerHTML = "";

//                 if (productsList.length === 0) {
//                     pro.innerHTML = `<h5 class="text-center text-white-50 my-5">No products found</h5>`;
//                     return;
//                 }

//                 productsList.forEach(product => {
//                     let parent = document.createElement("div");
//                     parent.className = "colm d-flex justify-content-center";

//                     let imgUrl = product.image || product.img || "";

                    
//                     parent.innerHTML = `
//                         <div class="par">
//                             <img src="${imgUrl}" class="img card-img-top" alt="${product.title}">
//                                 <h3 class="tit">${product.title}</h3>
//                                 <p class="desc">${product.description || ""}</p>
//                                 <div class="foter">
//                                     <p class="price">${product.price} EGP</p>
//                                     <button class="btn but butt-p fw-bold p-0 butbuy" 
//                                             data-name="${product.title}" 
//                                             data-price="${product.price}" 
//                                             data-img="${imgUrl}">Buy</button>
//                                 </div>
//                         </div>
//                     `;
//                     pro.appendChild(parent);
//                 });
//             }

//             // جلب البيانات بالـ Fetch ومنع التكرار باستخدام Map
//             fetch('https://6ad4af3348476c0785d93108.mockapi.io/prodect')
//                 .then(res => res.json())
//                 .then(data => {
//                     let uniqueMap = new Map();
//                     data.forEach(item => {
//                         let key = (item.title || "").toLowerCase().trim();
//                         if (key && !uniqueMap.has(key)) {
//                             uniqueMap.set(key, item);
//                         }
//                     });
//                     allProducts = Array.from(uniqueMap.values());
//                     renderProducts(allProducts); // عرض المنتجات افتراضياً
//                 })
//                 .catch(err => console.error("Error fetching products:", err));

//             // تفعيل البحث الفوري
//             if (searchInput) {
//                 searchInput.addEventListener('input', function (e) {
//                     let searchTerm = e.target.value.toLowerCase().trim();

//                     if (searchTerm === "") {
//                         renderProducts(allProducts); // إرجاع جميع المنتجات إذا كان البحث فارغاً
//                     } else {
//                         let filtered = allProducts.filter(item => {
//                             let title = (item.title || "").toLowerCase();
//                             let desc = (item.description || "").toLowerCase();
//                             return title.includes(searchTerm) || desc.includes(searchTerm);
//                         });
//                         renderProducts(filtered);
//                     }
//                 });
//             }
//         })
    


// ################################################################################

// ادارة تسجيل الدخول والخروج

    document.addEventListener("DOMContentLoaded", function () {

    let registerItem = document.getElementById("registerItem")
    let loginItem = document.getElementById("loginItem")
    let logoutItem = document.getElementById("logoutItem")

    let isLogged = localStorage.getItem("islog") === "true"

    if (isLogged) {
        // إذا كان مسجلاً للدخول: اخفِ التسجيل والدخول، وأظهر تسجيل الخروج
        if (registerItem) registerItem.style.display = "none"
        if (loginItem) loginItem.style.display = "none"
        if (logoutItem) logoutItem.style.display = "block"
    } else {
        // إذا لم يكن مسجلاً: أظهر التسجيل والدخول، واخفِ تسجيل الخروج
        if (registerItem) registerItem.style.display = "block"
        if (loginItem) loginItem.style.display = "block"
        if (logoutItem) logoutItem.style.display = "none"
    }

// register
    let registerForm = document.getElementById("registerForm")
    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault()

            let fullName = document.getElementById("namee")
            let email = document.getElementById("emaill")
            let password = document.getElementById("passwordd")
            
            localStorage.setItem("namee", fullName.value)
            localStorage.setItem("emaill", email.value)
            localStorage.setItem("passwordd", password.value)
            localStorage.setItem("islog", "true")
            
            alert("Registered successfully.")
            window.location.href = 'login.html'
        })
    }

// login
    let loginForm = document.getElementById("loginForm")
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault()

            let email2 = document.getElementById("email2")
            let password2 = document.getElementById("password2")
            
            let savedemail = localStorage.getItem("emaill")
            let savedpassword = localStorage.getItem("passwordd")

            if (email2.value === savedemail && password2.value === savedpassword) {
                localStorage.setItem("islog", "true")
                alert("Logged in successfully.")
                window.location.href = 'index.html'
            } else {
                alert("The data is incorrect.")
            }
        })
    }

// logout
    let logoutBtn = document.getElementById("Logout")
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function (e) {
            e.preventDefault()
            localStorage.setItem("islog", "false")
            alert("Logged out successfully.")
            window.location.href = "index.html"
        })
    }
})

// #####################################################
document.addEventListener('DOMContentLoaded', function () {
    
    // ==========================================
    // 1. نظام السلة (Shopping Cart Data & Logic)
    // ==========================================
    let cart = []
    let cartContainer = document.querySelector('.cart-items')
    let cartTotalElement = document.getElementById('cart-total')
    let cartCountElement = document.getElementById('cart-count')

    // تفويض الأحداث لإضافة المنتجات عند النقر على أي زر Buy
    document.body.addEventListener('click', function (e) {
        let button = e.target.closest('.butbuy')
        
        if (button) {
            e.preventDefault()

            // 👉 [هنا المكان الصحيح]: التحقق من تسجيل الدخول أولاً قبل أي شيء
            let islog = localStorage.getItem("islog")

            if (islog !== "true") {
                alert("You must log in or create an account first to complete the purchase.")
                window.location.href = "./login.html"
                return // إيقاف التنفيذ وعدم إضافة المنتج للسلة
            }

            // إذا كان مسجلاً، يتم استكمال عملية الإضافة للسلة بشكل طبيعي
            let name = button.getAttribute('data-name')
            let price = parseFloat(button.getAttribute('data-price'))
            let img = button.getAttribute('data-img')

            let existingItem = cart.find(item => item.name === name)
            if (existingItem) {
                existingItem.quantity += 1
            } else {
                cart.push({ name, price, img, quantity: 1 })
            }

            updateCartUI()

            // إظهار سلة المشتريات (Bootstrap Offcanvas)
            let cartOffcanvasEl = document.getElementById('shoppingCartOffcanvas')
            if (cartOffcanvasEl) {
                let cartCanvas = bootstrap.Offcanvas.getOrCreateInstance(cartOffcanvasEl)
                cartCanvas.show()
            }
        }
    })

    // تحديث واجهة المستخدم الخاصة بالسلة
    function updateCartUI() {
        if (!cartContainer) return
        cartContainer.innerHTML = ''
        let total = 0
        let totalCount = 0

        if (cart.length === 0) {
            cartContainer.innerHTML = `<p class="text-center text-white-50 my-4">Your cart is empty.</p>`
            if (cartTotalElement) cartTotalElement.textContent = '0.00 EGP'
            if (cartCountElement) cartCountElement.textContent = '0'
            return
        }

        cart.forEach((item, index) => {
            total += item.price * item.quantity
            totalCount += item.quantity

            let cartItemHTML = `
                <div class="cart-item d-flex align-items-center justify-content-between border-bottom py-3 text-white">
                    <div class="d-flex align-items-center">
                        <img src="${item.img}" alt="${item.name}" style="width: 70px; height: 60px; object-fit: cover" class="rounded me-2">
                        <div>
                            <h6 class="mb-1 fw-bold" style="font-size: 13px">${item.name}</h6>
                            <small class="text-white-50 d-block mb-1">${item.price} EGP</small>
                            <div class="input-group input-group-sm" style="width: 100px;">
                                <button class="btn btn-outline-light px-2" onclick="changeQuantity(${index}, -1)">-</button>
                                <span class="form-control text-center bg-dark text-white border-secondary px-1">${item.quantity}</span>
                                <button class="btn btn-outline-light px-2" onclick="changeQuantity(${index}, 1)">+</button>
                            </div>
                        </div>
                    </div>
                    <button class="btn btn-sm btn-outline-danger ms-2 px-2 py-1" onclick="removeFromCart(${index})">
                        Cancel
                    </button>
                </div>
            `
            cartContainer.innerHTML += cartItemHTML
        })

        if (cartTotalElement) cartTotalElement.textContent = `${total.toLocaleString()} EGP`
        if (cartCountElement) cartCountElement.textContent = totalCount;
    }

    // تعديل كمية المنتج داخل السلة
    window.changeQuantity = function (index, amount) {
        cart[index].quantity += amount;
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        updateCartUI();
    };

    // حذف منتج من السلة
    window.removeFromCart = function (index) {
        cart.splice(index, 1);
        updateCartUI();
    };

    updateCartUI();


    // ==========================================
    // 2. التحكم في القائمة (Navbar) ومربع البحث
    // ==========================================
    let togglerBtn = document.getElementById('navbarTogglerBtn')
    let navbarNav = document.getElementById('navbarNav')
    if (togglerBtn && navbarNav) {
        togglerBtn.addEventListener('click', function() {
            navbarNav.classList.toggle('show')
        })
    }

    let searchIcon = document.getElementById('searchIcon')
    let searchBoxContainer = document.getElementById('searchBoxContainer')
    let searchInput = document.getElementById('searchInput')

    if (searchIcon && searchBoxContainer) {
        searchIcon.addEventListener('click', function (e) {
            e.preventDefault()
            e.stopPropagation()
            searchBoxContainer.classList.toggle('d-none')
            if (!searchBoxContainer.classList.contains('d-none') && searchInput) {
                searchInput.focus()
            }
        })

        searchBoxContainer.addEventListener('click', function (e) {
            e.stopPropagation()
        })
    }

    document.addEventListener('click', function () {
        if (searchBoxContainer && !searchBoxContainer.classList.contains('d-none')) {
            searchBoxContainer.classList.add('d-none')
        }
    })


    // ==========================================
    // 3. جلب المنتجات (Fetch) وعرضها مع البحث الفوري
    // ==========================================
    let allProducts = []
    let pro = document.getElementById("parent2")
    if (pro) {
        pro.className = "parent"
    }

    function renderProducts(productsList) {
        if (!pro) return
        pro.innerHTML = ""

        if (productsList.length === 0) {
            pro.innerHTML = `<h5 class="text-center text-white-50 my-5">No products found</h5>`
            return
        }

        productsList.forEach(product => {
            let parent = document.createElement("div")
            parent.className = "colm d-flex justify-content-center"

            let imgUrl = product.image || product.img || ""

            parent.innerHTML = `
                <div class="par">
                    <img src="${imgUrl}" class="img card-img-top" alt="${product.title || 'Product'}">
                    <h3 class="tit">${product.title || ''}</h3>
                    <p class="desc">${product.description || ''}</p>
                    <div class="foter">
                        <p class="price">${product.price || 0} EGP</p>
                        <button class="btn but butt-p fw-bold p-0 butbuy" 
                                data-name="${product.title || ''}" 
                                data-price="${product.price || 0}" 
                                data-img="${imgUrl}">Buy</button>
                    </div>
                </div>
            `
            pro.appendChild(parent)
        })
    }

    // جلب المنتجات من الـ API ومنع التكرار
    fetch('https://6ad4af3348476c0785d93108.mockapi.io/prodect')
        .then(res => res.json())
        .then(data => {
            let uniqueMap = new Map()
            data.forEach(item => {
                let key = (item.title || "").toLowerCase().trim()
                if (key && !uniqueMap.has(key)) {
                    uniqueMap.set(key, item)
                }
            })
            allProducts = Array.from(uniqueMap.values())
            renderProducts(allProducts)
        })
        .catch(err => console.error("Error fetching products:", err))

    // تفعيل البحث الفوري
    if (searchInput) {
        searchInput.addEventListener('input', function (e) {
            let searchTerm = e.target.value.toLowerCase().trim()

            if (searchTerm === "") {
                renderProducts(allProducts)
            } else {
                let filtered = allProducts.filter(item => {
                    let title = (item.title || "").toLowerCase()
                    let desc = (item.description || "").toLowerCase()
                    return title.includes(searchTerm) || desc.includes(searchTerm)
                })
                renderProducts(filtered)
            }
        })
    }

})