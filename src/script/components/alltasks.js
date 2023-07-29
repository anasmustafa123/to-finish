import "../../styles/alltasks.css";
const alltasks = document.createElement("div");
alltasks.className= "all-tasks";
alltasks.innerHTML= 
` 
<div class = "view-container">
<div class = "view-border">
<svg class = "" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="var(--dark-grey)" d="M21.2995 7.57969H15.7195C15.3295 7.57969 15.0195 7.26969 15.0195 6.87969C15.0195 6.48969 15.3295 6.17969 15.7195 6.17969H21.2995C21.6895 6.17969 21.9995 6.48969 21.9995 6.87969C21.9995 7.26969 21.6895 7.57969 21.2995 7.57969Z" fill="#292D32"/>
    <path fill="var(--dark-grey)" d="M6.42 7.57969H2.7C2.31 7.57969 2 7.26969 2 6.87969C2 6.48969 2.31 6.17969 2.7 6.17969H6.42C6.81 6.17969 7.12 6.48969 7.12 6.87969C7.12 7.26969 6.8 7.57969 6.42 7.57969Z" fill="#292D32"/>
    <path fill="var(--dark-grey)" d="M10.1395 10.8297C12.321 10.8297 14.0895 9.06121 14.0895 6.87969C14.0895 4.69816 12.321 2.92969 10.1395 2.92969C7.95793 2.92969 6.18945 4.69816 6.18945 6.87969C6.18945 9.06121 7.95793 10.8297 10.1395 10.8297Z" fill="#292D32"/>
    <path fill="var(--dark-grey)"d="M21.3009 17.8102H17.5809C17.1909 17.8102 16.8809 17.5002 16.8809 17.1102C16.8809 16.7202 17.1909 16.4102 17.5809 16.4102H21.3009C21.6909 16.4102 22.0009 16.7202 22.0009 17.1102C22.0009 17.5002 21.6909 17.8102 21.3009 17.8102Z" fill="#292D32"/>
    <path fill="var(--dark-grey)"d="M8.28 17.8102H2.7C2.31 17.8102 2 17.5002 2 17.1102C2 16.7202 2.31 16.4102 2.7 16.4102H8.28C8.67 16.4102 8.98 16.7202 8.98 17.1102C8.98 17.5002 8.66 17.8102 8.28 17.8102Z" fill="#292D32"/>
    <path fill="var(--dark-grey)"d="M13.8602 21.0719C16.0417 21.0719 17.8102 19.3034 17.8102 17.1219C17.8102 14.9404 16.0417 13.1719 13.8602 13.1719C11.6786 13.1719 9.91016 14.9404 9.91016 17.1219C9.91016 19.3034 11.6786 21.0719 13.8602 21.0719Z" fill="#292D32"/>
</svg>
<div class = "view">
   view
</div>
<div class="view-option-container hide">
    <div class="sort-container">
        <h2 class="header">sort by:</h2>
        <h3  id = "s0" class="sort-option" selected = "t" ><i class='bx bx-cog' ></i>Default (None)</h3>
        <h3 class="sort-option" id = "s1" selected = "f"><i class='bx bx-sort-down' ></i>Date</h3>
    </div>
    <div class="group-container">
        <h2 class="header">group by:</h2>
        <h3 id = "g0" class="group-option" selected = "t"><i class='bx bx-cog' ></i>Default (None)</h3>
        <h3 id = "g1" class="group-option" selected = "f"><i class='bx bxs-purchase-tag-alt' ></i>priority</h3>
    </div>
</div>
</div>
</div> 
</div>`;

export {alltasks};