const addbtn = document.getElementById('addbtn')
const list = document.getElementById('ul')
const li=document.createElement('li')

function add(){
    const li=document.createElement('li')
    const list = document.getElementById('ul')
    const p=document.createElement('p')
    const br=document.createElement('br')
    const i=document.createElement('i')
    const rem=document.createElement('button')

    var item=prompt("Enter Item Name")
    item = item[0].toUpperCase()+item.substring(1,item.length)
    const chk=document.createElement('input')
    chk.style.width='20px'
    chk.style.height='20px'
    chk.style.position='relative'
    chk.style.top='2px'
    chk.style.marginTop='15px'
    chk.style.marginBottom='15px'
    chk.type='checkbox'
    const lbl=document.createElement('label')

    i.className='fa-solid fa-xmark'
    rem.style.position='absolute'
    rem.style.left='70vw'
    rem.style.marginTop='10px'
    rem.style.background='none'
    rem.style.borderStyle='solid'
    rem.style.borderWidth='2px'
    rem.style.borderRadius='3px'
    rem.style.borderColor='#e74c3c'
    // i.style.top='10px'

    let txt=document.createTextNode(item)
    lbl.appendChild(txt)

    let newli=list.appendChild(chk)
    list.appendChild(lbl)
    list.appendChild(rem)
    rem.appendChild(i)
    list.appendChild(br)

    if (list.children.length==4){
        newli.id=1
        lbl.id='l1'
        lbl.htmlFor=1
        rem.id=' 1'
        br.id='b1'
    }else{
        newli.id=list.children[list.children.length-8].id+1
        lbl.id='l'+(list.children[list.children.length-8].id+1)
        lbl.htmlFor=list.children[list.children.length-8].id+1
        rem.id=' '+list.children[list.children.length-8].id+1
        br.id='b'+(list.children[list.children.length-8].id+1)
    }
    rem.onclick= () => {
        let chid=rem.id.trim()
        let remch=document.getElementById(chid)
        let remlbl=document.getElementById('l'+chid)
        let remrem=document.getElementById(' '+chid)
        let rembr=document.getElementById('b'+chid)
        remch.parentNode.removeChild(remch)
        remlbl.parentNode.removeChild(remlbl)
        remrem.parentElement.removeChild(remrem)
        rembr.parentNode.removeChild(rembr)

    }
}