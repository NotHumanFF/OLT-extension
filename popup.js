document.getElementById('run-button').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTab = tabs[0];
      chrome.scripting.executeScript({
        target: { tabId: activeTab.id },
        function: executeCodeOnWebsite
      });
    });
  });
  
  function executeCodeOnWebsite() {
      let arr = window.parent.a.secQuesMap[1];
      let ans = [];
      arr.forEach(elem => {
          if (elem[3] === elem[10][0])
              ans.push("A");
          else if (elem[3] === elem[11][0])
              ans.push("B");
          else if (elem[3] === elem[12][0])
              ans.push("C");
          else if (elem[3] === elem[13][0])
              ans.push("D");
      });
      let i = 1;
      ans.forEach(elem => {
          // sends
          chrome.runtime.sendMessage({
            action: 'log',
            data: i + " : " + elem
          });
          i++;
      });
  }
  
