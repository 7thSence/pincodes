$content = Get-Content 'c:\projects\pincodes\index.html' -Raw
$start = $content.IndexOf('const database = [')
$end = $content.IndexOf('];', $start) + 2
$data = $content.Substring($start, $end - $start)
Set-Content -Path 'c:\projects\pincodes\pincode-data.js' -Value $data -Encoding UTF8
Write-Host "Extracted $($end - $start) characters of pincode data"
