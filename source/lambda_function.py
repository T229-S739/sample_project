from urllib.parse import unquote_plus
import logging
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    bucket = event['Records'][0]['s3']['bucket']['name']
    key = unquote_plus(event['Records'][0]['s3']['object']['key'], encoding='utf-8')
    logger.info("Function Start (deploy from S3) : Bucket={0}, Key={1}" .format(bucket, key))
            